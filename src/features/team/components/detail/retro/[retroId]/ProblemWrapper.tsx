'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetroProblem, updateRetroProblemStatus } from '@/features/team/services/retroService';
import {
  CreateRetroProblemPayload,
  ProblemKanbanStatus,
  RetroProblemListItem,
  UpdateRetroProblemStatusParams,
  UpdateRetroProblemStatusPayload,
} from '@/features/team/services/retroService.type';
import useApiError from '@/shared/hooks/useApiError';
import { useSidePanelStore } from '@/shared/store/sidePanel/sidePanel';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { autoScrollForElements } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/element';
import { unsafeOverflowAutoScrollForElements } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/unsafe-overflow/element';
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { getReorderDestinationIndex } from '@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index';
import { Client } from '@stomp/stompjs';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProblemCardList from './ProblemCardList';
import ProblemSidePanelContent from './ProblemSidePanelContent';

interface ProblemWrapperProps {
  retroId: string;
  client: Client | null;
}

const ProblemWrapper = ({ retroId, client }: ProblemWrapperProps) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();
  const handleSwitchCard = useSidePanelStore((state) => state.handleSwitchCard);
  const contentRef = useRef<HTMLDivElement>(null);

  const rcgData = useSuspenseQuery({
    ...retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'RCG' }),
  });

  const prgData = useSuspenseQuery({
    ...retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'PRG' }),
  });

  const okData = useSuspenseQuery({
    ...retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'OK' }),
  });

  const updateRetroProblemStatusMutation = useMutation({
    mutationFn: ({
      params,
      payload,
    }: {
      params: UpdateRetroProblemStatusParams;
      payload: UpdateRetroProblemStatusPayload;
    }) => updateRetroProblemStatus(params, payload),
  });

  const createRetroProblemMutation = useMutation({
    mutationFn: (payload: CreateRetroProblemPayload) => createRetroProblem({ retroId }, payload),
  });

  const handleCreateCard = async (kanbanStatus: ProblemKanbanStatus) => {
    try {
      const { id } = await createRetroProblemMutation.mutateAsync({
        title: '',
        content: '',
        kanbanStatus,
      });
      if (id) {
        handleSwitchCard({
          cardId: `${retroId}-PBM-${id}-${kanbanStatus}-TaskCard`,
          content: <ProblemSidePanelContent retroId={retroId} problemId={id} client={client} />,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  // 낙관적 업데이트: React Query 캐시만 업데이트
  const reorderWithinList = (list: RetroProblemListItem[], startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result.map((item, idx) => ({ ...item, orderIndex: idx }));
  };

  const moveBetweenLists = (
    sourceList: RetroProblemListItem[],
    destList: RetroProblemListItem[],
    sourceIndex: number,
    destIndex: number,
    destStatus: ProblemKanbanStatus,
  ) => {
    const newSource = [...sourceList];
    const newDest = [...destList];
    const [moved] = newSource.splice(sourceIndex, 1);
    const movedUpdated: RetroProblemListItem = {
      ...moved,
      kanbanStatus: destStatus,
      orderIndex: destIndex,
    } as RetroProblemListItem;
    newDest.splice(destIndex, 0, movedUpdated);
    return {
      newSource: newSource.map((item, idx) => ({ ...item, orderIndex: idx })),
      newDest: newDest.map((item, idx) => ({ ...item, orderIndex: idx })),
    };
  };

  // pragmatic-drag-and-drop 모니터링 설정
  useEffect(() => {
    return monitorForElements({
      onDrop: async ({ source, location }) => {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          return;
        }

        const sourceData = source.data;
        const destinationData = destination.data;

        if (sourceData.type !== 'problem-card') {
          return;
        }

        const itemId = sourceData.itemId as string;
        const sourceStatus = sourceData.sourceStatus as ProblemKanbanStatus;
        const sourceIndex = sourceData.sourceIndex as number;

        // 카드 위에 드롭한 경우
        if (destinationData.type === 'problem-card') {
          const targetIndex = destinationData.index as number;
          const closestEdge = extractClosestEdge(destinationData);
          const destinationStatus = destinationData.kanbanStatus as ProblemKanbanStatus;

          const sourceKey = retroQueries.readRetroProblemList({ retroId, kanbanStatus: sourceStatus }).queryKey;
          const destKey = retroQueries.readRetroProblemList({ retroId, kanbanStatus: destinationStatus }).queryKey;

          const prevSourceData = queryClient.getQueryData(sourceKey) as any;
          const prevDestData = sourceStatus === destinationStatus ? null : (queryClient.getQueryData(destKey) as any);

          const sourceList: RetroProblemListItem[] = prevSourceData?.payload ? [...prevSourceData.payload] : [];
          const destList: RetroProblemListItem[] =
            sourceStatus === destinationStatus ? sourceList : prevDestData?.payload ? [...prevDestData.payload] : [];

          const sourceItem = sourceList[sourceIndex];

          if (!sourceItem) return;

          // 자기 자신에게 드롭한 경우 무시
          if (sourceStatus === destinationStatus && sourceIndex === targetIndex) {
            return;
          }

          // edge에 따라 최종 인덱스 계산
          let finalIndex = targetIndex;
          if (closestEdge === 'bottom') {
            finalIndex = targetIndex + 1;
          }

          // 같은 리스트 내에서 이동할 때, 원본이 대상보다 앞에 있으면 인덱스 조정
          if (sourceStatus === destinationStatus && sourceIndex < finalIndex) {
            finalIndex -= 1;
          }

          try {
            if (sourceStatus === destinationStatus) {
              // 같은 칸반 내에서 순서 변경
              const reordered = reorderWithinList(sourceList, sourceIndex, finalIndex);
              queryClient.setQueryData(sourceKey, { ...prevSourceData, payload: reordered, count: reordered.length });

              const destOrderIndex = sourceList[finalIndex] ? sourceList[finalIndex].orderIndex : null;

              await updateRetroProblemStatusMutation.mutateAsync({
                params: {
                  retroId,
                  problemId: itemId,
                },
                payload: {
                  kanbanStatus: destinationStatus,
                  changeIndex: destOrderIndex,
                },
              });
            } else {
              // 다른 칸반으로 이동
              const { newSource, newDest } = moveBetweenLists(
                sourceList,
                destList,
                sourceIndex,
                finalIndex,
                destinationStatus,
              );
              queryClient.setQueryData(sourceKey, { ...prevSourceData, payload: newSource, count: newSource.length });
              queryClient.setQueryData(destKey, { ...prevDestData, payload: newDest, count: newDest.length });

              const destOrderIndex = destList[finalIndex] ? destList[finalIndex].orderIndex : null;

              await updateRetroProblemStatusMutation.mutateAsync({
                params: {
                  retroId,
                  problemId: itemId,
                },
                payload: {
                  kanbanStatus: destinationStatus,
                  changeIndex: destOrderIndex,
                },
              });
            }
          } catch (error) {
            if (prevSourceData) {
              queryClient.setQueryData(sourceKey, prevSourceData);
            }
            if (prevDestData) {
              queryClient.setQueryData(destKey, prevDestData);
            }
            handleError(error);
          } finally {
            queryClient.invalidateQueries({ queryKey: sourceKey });
            if (sourceStatus !== destinationStatus) {
              queryClient.invalidateQueries({ queryKey: destKey });
            }
          }
          return;
        }

        // 빈 drop-zone에 드롭한 경우
        if (destinationData.type === 'drop-zone') {
          const destinationStatus = destinationData.status as ProblemKanbanStatus;

          const sourceKey = retroQueries.readRetroProblemList({ retroId, kanbanStatus: sourceStatus }).queryKey;
          const destKey = retroQueries.readRetroProblemList({ retroId, kanbanStatus: destinationStatus }).queryKey;

          const prevSourceData = queryClient.getQueryData(sourceKey) as any;
          const prevDestData = sourceStatus === destinationStatus ? null : (queryClient.getQueryData(destKey) as any);

          const sourceList: RetroProblemListItem[] = prevSourceData?.payload ? [...prevSourceData.payload] : [];
          const destList: RetroProblemListItem[] =
            sourceStatus === destinationStatus ? sourceList : prevDestData?.payload ? [...prevDestData.payload] : [];

          const sourceItem = sourceList[sourceIndex];
          if (!sourceItem) return;

          // 대상 인덱스는 리스트 끝
          const destinationIndex = destList.length;

          try {
            if (sourceStatus === destinationStatus) {
              // 같은 칸반 내에서는 순서 변경 없음 (빈 공간이므로)
              return;
            }

            const { newSource, newDest } = moveBetweenLists(
              sourceList,
              destList,
              sourceIndex,
              destinationIndex,
              destinationStatus,
            );
            queryClient.setQueryData(sourceKey, { ...prevSourceData, payload: newSource, count: newSource.length });
            queryClient.setQueryData(destKey, { ...prevDestData, payload: newDest, count: newDest.length });

            const destOrderIndex = destList[destinationIndex] ? destList[destinationIndex].orderIndex : null;

            await updateRetroProblemStatusMutation.mutateAsync({
              params: {
                retroId,
                problemId: itemId,
              },
              payload: {
                kanbanStatus: destinationStatus,
                changeIndex: destOrderIndex,
              },
            });
          } catch (error) {
            if (prevSourceData) {
              queryClient.setQueryData(sourceKey, prevSourceData);
            }
            if (prevDestData) {
              queryClient.setQueryData(destKey, prevDestData);
            }
            handleError(error);
          } finally {
            queryClient.invalidateQueries({ queryKey: sourceKey });
            if (sourceStatus !== destinationStatus) {
              queryClient.invalidateQueries({ queryKey: destKey });
            }
          }
        }
      },
    });
  }, [retroId, queryClient, updateRetroProblemStatusMutation, handleError]);

  // Content 영역 자동 스크롤 설정 (칸반 컨테이너)
  // useEffect(() => {
  //   const contentElement = contentRef.current;
  //   if (!contentElement) return;

  //   return unsafeOverflowAutoScrollForElements({
  //     element: contentElement,
  //     getConfiguration: () => ({ maxScrollSpeed: 'fast' }),
  //     getOverflow: () => ({
  //       forLeftEdge: { left: 50 }, // 왼쪽에서 150px 안쪽부터 스크롤 시작
  //       forTopEdge: { top: 50 }, // 위에서 150px 안쪽부터 스크롤 시작
  //       forBottomEdge: { bottom: 50 }, // 아래에서 150px 안쪽부터 스크롤 시작
  //       forRightEdge: { right: 50 }, // 오른쪽에서 150px 안쪽부터 스크롤 시작
  //     }),
  //   });
  // }, []);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    return monitorForElements({
      onDragStart() {
        return unsafeOverflowAutoScrollForElements({
          element: contentElement,
          getConfiguration: () => ({ maxScrollSpeed: 'fast' }),
          getOverflow: () => ({
            forLeftEdge: { left: 5000 },
            forRightEdge: { right: 5000 },
            forTopEdge: { top: 5000 },
            forBottomEdge: { bottom: 5000 },
          }),
        });
      },
    });
  }, []);

  useEffect(() => {
    if (client && client.connected && retroId) {
      const kanbanStatuses: ProblemKanbanStatus[] = ['RCG', 'PRG', 'OK'];
      const subscriptions: any[] = [];

      kanbanStatuses.forEach((status) => {
        const subscription = client.subscribe(`/user/topic/retrospectives/${status}`, (message) => {
          const data = JSON.parse(message.body);
          if (data.code === 'UPDATE') {
            queryClient.refetchQueries({
              queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: status }).queryKey,
            });
          }
        });

        subscriptions.push(subscription);
      });

      return () => {
        subscriptions.forEach((subscription) => subscription.unsubscribe());
      };
    }
  }, [client, retroId, queryClient]);

  return (
    <Wrapper>
      <Head>
        <PageSubTitle first="Q2. 개선할 점은 무엇이고 개선하기 위해 어떤 걸 시도할 수 있나요?" />
      </Head>
      <Content ref={contentRef}>
        <ProblemCardListWrapper>
          <ProblemCardList
            retroId={retroId}
            kanbanStatus="RCG"
            client={client}
            problems={rcgData.data?.payload || []}
            onCreateCard={() => handleCreateCard('RCG')}
          />
          <ProblemCardList
            retroId={retroId}
            kanbanStatus="PRG"
            client={client}
            problems={prgData.data?.payload || []}
            onCreateCard={() => handleCreateCard('PRG')}
          />
          <ProblemCardList
            retroId={retroId}
            kanbanStatus="OK"
            client={client}
            problems={okData.data?.payload || []}
            onCreateCard={() => handleCreateCard('OK')}
          />
        </ProblemCardListWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 24px;
`;

const Content = styled.div`
  gap: 16px;
  padding: 0 24px;
  padding-bottom: 24px;
  flex-grow: 1;
  max-height: calc(100vh - 126px);
  overflow-y: auto;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProblemCardListWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: fit-content;
  height: fit-content;
`;

ProblemWrapper.displayName = 'ProblemWrapper';

export default ProblemWrapper;
