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
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProblemCardList from './ProblemCardList';
import ProblemSidePanelContent from './ProblemSidePanelContent';

// 로컬 상태 타입 정의
type ProblemsByStatus = {
  RCG: RetroProblemListItem[];
  PRG: RetroProblemListItem[];
  OK: RetroProblemListItem[];
};

interface ProblemWrapperProps {
  retroId: string;
  client: Client | null;
}

const ProblemWrapper = ({ retroId, client }: ProblemWrapperProps) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();
  const handleSwitchCard = useSidePanelStore((state) => state.handleSwitchCard);

  // 로컬 상태 추가
  const [problemsByStatus, setProblemsByStatus] = useState<ProblemsByStatus>({
    RCG: [],
    PRG: [],
    OK: [],
  });

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

  const updateProblemStatusLocal = (
    sourceProblem: RetroProblemListItem,
    source: { status: ProblemKanbanStatus; index: number },
    destination: {
      status: ProblemKanbanStatus;
      index?: number;
    },
    problemsByStatus: ProblemsByStatus,
  ): ProblemsByStatus => {
    if (source.status === destination.status) {
      // 같은 칸반 내에서 순서 변경
      const column = [...problemsByStatus[source.status as keyof ProblemsByStatus]];
      column.splice(source.index, 1);
      column.splice(destination.index ?? column.length + 1, 0, sourceProblem);
      return {
        ...problemsByStatus,
        [destination.status as keyof ProblemsByStatus]: column,
      };
    }

    const sourceColumn = [...problemsByStatus[source.status as keyof ProblemsByStatus]];
    const destinationColumn = [...problemsByStatus[destination.status as keyof ProblemsByStatus]];
    sourceColumn.splice(source.index, 1);
    destinationColumn.splice(destination.index ?? destinationColumn.length + 1, 0, sourceProblem);
    return {
      ...problemsByStatus,
      [source.status as keyof ProblemsByStatus]: sourceColumn,
      [destination.status as keyof ProblemsByStatus]: destinationColumn,
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

    // 드래그한 카드 정보 가져오기
    const sourceProblem = problemsByStatus[sourceStatus as keyof ProblemsByStatus][source.index]!;

    // 드롭한 위치의 카드 정보 가져오기 (샘플 코드 패턴)
    const destinationProblem = problemsByStatus[destinationStatus as keyof ProblemsByStatus][destination.index] ?? {
      status: destinationStatus,
      orderIndex: undefined, // undefined if dropped after the last item
    };

    // 원본 상태 백업 (롤백용)
    const originalProblemsByStatus = problemsByStatus;

    // 1. 로컬 상태를 먼저 업데이트 (즉시 UI 반영)
    setProblemsByStatus(
      updateProblemStatusLocal(
        sourceProblem,
        { status: sourceStatus, index: source.index },
        { status: destinationStatus, index: destination.index },
        problemsByStatus,
      ),
    );

    // 2. 서버에 변경사항 전송
    try {
      await updateRetroProblemStatusMutation.mutateAsync({
        params: {
          retroId,
          problemId: draggableId,
        },
        payload: {
          kanbanStatus: destinationStatus,
          changeIndex: destinationProblem.orderIndex, // 실제 카드의 orderIndex
        },
      });
    } catch (error) {
      // 실패 시 로컬 상태 롤백
      setProblemsByStatus(originalProblemsByStatus);
      handleError(error);
    }
  };

  // 서버 데이터를 로컬 상태와 동기화
  useEffect(() => {
    setProblemsByStatus({
      RCG: rcgData.data?.payload || [],
      PRG: prgData.data?.payload || [],
      OK: okData.data?.payload || [],
    });
  }, [rcgData.data, prgData.data, okData.data]);

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
        <DragDropContext key={`${retroId}-${JSON.stringify(problemsByStatus)}`} onDragEnd={handleDragEnd}>
          <ProblemCardList
            retroId={retroId}
            kanbanStatus="RCG"
            client={client}
            problems={problemsByStatus.RCG}
            onCreateCard={() => handleCreateCard('RCG')}
          />
          <ProblemCardList
            retroId={retroId}
            kanbanStatus="PRG"
            client={client}
            problems={problemsByStatus.PRG}
            onCreateCard={() => handleCreateCard('PRG')}
          />
          <ProblemCardList
            retroId={retroId}
            kanbanStatus="OK"
            client={client}
            problems={problemsByStatus.OK}
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
  overflow-x: auto;
`;

ProblemWrapper.displayName = 'ProblemWrapper';

export default ProblemWrapper;
