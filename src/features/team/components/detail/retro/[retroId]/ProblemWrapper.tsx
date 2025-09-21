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
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Client } from '@stomp/stompjs';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import styled from 'styled-components';
import ProblemCardList from './ProblemCardList';
import ProblemSidePanelContent from './ProblemSidePanelContent';

// 로컬 상태 타입 정의 제거 (React Query 캐시만 사용)

interface ProblemWrapperProps {
  retroId: string;
  client: Client | null;
}

const ProblemWrapper = ({ retroId, client }: ProblemWrapperProps) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();
  const handleSwitchCard = useSidePanelStore((state) => state.handleSwitchCard);

  // 각 칸반의 서버 데이터 조회
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

  // 카드 생성 핸들러
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

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const isSame = destination.droppableId === source.droppableId && destination.index === source.index;
    if (isSame) {
      return;
    }

    const sourceStatus = source.droppableId as ProblemKanbanStatus;
    const destinationStatus = destination.droppableId as ProblemKanbanStatus;

    const sourceKey = retroQueries.readRetroProblemList({ retroId, kanbanStatus: sourceStatus }).queryKey;
    const destKey = retroQueries.readRetroProblemList({ retroId, kanbanStatus: destinationStatus }).queryKey;

    const prevSourceData = queryClient.getQueryData(sourceKey) as any;
    const prevDestData = sourceStatus === destinationStatus ? null : (queryClient.getQueryData(destKey) as any);

    const sourceList: RetroProblemListItem[] = prevSourceData?.payload ? [...prevSourceData.payload] : [];
    const destList: RetroProblemListItem[] =
      sourceStatus === destinationStatus ? sourceList : prevDestData?.payload ? [...prevDestData.payload] : [];

    const sourceItem = sourceList[source.index];
    if (!sourceItem) return;

    try {
      if (sourceStatus === destinationStatus) {
        const reordered = reorderWithinList(sourceList, source.index, destination.index);
        queryClient.setQueryData(sourceKey, { ...prevSourceData, payload: reordered, count: reordered.length });
      } else {
        const { newSource, newDest } = moveBetweenLists(
          sourceList,
          destList,
          source.index,
          destination.index,
          destinationStatus,
        );
        queryClient.setQueryData(sourceKey, { ...prevSourceData, payload: newSource, count: newSource.length });
        queryClient.setQueryData(destKey, { ...prevDestData, payload: newDest, count: newDest.length });
      }

      // 서버에 전달할 changeIndex는 "대상 위치의 실제 orderIndex"로 계산
      const destOrderIndex = (() => {
        if (sourceStatus === destinationStatus) {
          const target = sourceList[destination.index];
          return target ? target.orderIndex : null;
        }
        const target = destList[destination.index];
        return target ? target.orderIndex : null;
      })();

      await updateRetroProblemStatusMutation.mutateAsync({
        params: {
          retroId,
          problemId: draggableId,
        },
        payload: {
          kanbanStatus: destinationStatus,
          changeIndex: destOrderIndex,
        },
      });
    } catch (error) {
      // 롤백
      if (prevSourceData) {
        queryClient.setQueryData(sourceKey, prevSourceData);
      }
      if (prevDestData) {
        queryClient.setQueryData(destKey, prevDestData);
      }
      handleError(error);
    } finally {
      // 서버 최신 상태로 동기화 (중복 방지 위해 해당 키만 invalidate)
      queryClient.invalidateQueries({ queryKey: sourceKey });
      if (sourceStatus !== destinationStatus) {
        queryClient.invalidateQueries({ queryKey: destKey });
      }
    }
  };

  // 캐시는 React Query가 관리하므로 별도 동기화 상태 불필요

  // WebSocket 구독으로 실시간 동기화
  useEffect(() => {
    if (client && client.connected && retroId) {
      const kanbanStatuses: ProblemKanbanStatus[] = ['RCG', 'PRG', 'OK'];
      const subscriptions: any[] = [];

      kanbanStatuses.forEach((status) => {
        const subscription = client.subscribe(`/user/topic/retrospectives/${status}`, (message) => {
          const data = JSON.parse(message.body);
          if (data.code === 'UPDATE') {
            // 즉시 리페칭해서 로컬 상태 업데이트
            queryClient.refetchQueries({
              queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: status }).queryKey,
            });
          }
        });

        subscriptions.push(subscription);
      });

      // 구독 정리
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
      <Content>
        <DragDropContext onDragEnd={handleDragEnd}>
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
        </DragDropContext>
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
  margin: 0 24px;
  padding: 7px 24px;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 48px;
  padding-bottom: 24px;
  flex-grow: 1;
`;

ProblemWrapper.displayName = 'ProblemWrapper';

export default ProblemWrapper;
