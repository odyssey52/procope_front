'use client';

import { updateRetroProblemOrder, updateRetroProblemStatus } from '@/features/team/services/retroService';
import {
  ProblemKanbanStatus,
  UpdateRetroProblemOrderParams,
  UpdateRetroProblemOrderPayload,
  UpdateRetroProblemStatusParams,
  UpdateRetroProblemStatusPayload,
} from '@/features/team/services/retroService.type';
import useApiError from '@/shared/hooks/useApiError';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Client } from '@stomp/stompjs';
import { useMutation } from '@tanstack/react-query';
import styled from 'styled-components';
import ProblemCardList from './ProblemCardList';

interface ProblemWrapperProps {
  retroId: string;
  client: Client | null;
}

const ProblemWrapper = ({ retroId, client }: ProblemWrapperProps) => {
  const { handleError } = useApiError();
  const updateRetroProblemStatusMutation = useMutation({
    mutationFn: ({
      params,
      payload,
    }: {
      params: UpdateRetroProblemStatusParams;
      payload: UpdateRetroProblemStatusPayload;
    }) => updateRetroProblemStatus(params, payload),
  });

  const updateRetroProblemOrderMutation = useMutation({
    mutationFn: ({
      params,
      payload,
    }: {
      params: UpdateRetroProblemOrderParams;
      payload: UpdateRetroProblemOrderPayload;
    }) => updateRetroProblemOrder(params, payload),
  });

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    try {
      const isSameStatus = destination.droppableId === source.droppableId;
      const isSameIndex = destination.index === source.index;
      if (isSameStatus) {
        if (isSameIndex) {
          return;
        }
        await updateRetroProblemOrderMutation.mutateAsync({
          params: {
            retroId,
            problemId: draggableId,
          },
          payload: {
            changeOrder: destination.index,
          },
        });
      }

      await updateRetroProblemStatusMutation.mutateAsync({
        params: {
          retroId,
          problemId: draggableId,
        },
        payload: {
          kanbanStatus: destination.droppableId as ProblemKanbanStatus,
        },
      });

      await updateRetroProblemOrderMutation.mutateAsync({
        params: {
          retroId,
          problemId: draggableId,
        },
        payload: {
          changeOrder: destination.index,
        },
      });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Wrapper>
      <Head>
        <PageSubTitle first="Q2. 개선할 점은 무엇이고 개선하기 위해 어떤 걸 시도할 수 있나요?" />
      </Head>
      <Content>
        <DragDropContext onDragEnd={handleDragEnd}>
          <ProblemCardList retroId={retroId} kanbanStatus="RCG" client={client} />
          <ProblemCardList retroId={retroId} kanbanStatus="PRG" client={client} />
          <ProblemCardList retroId={retroId} kanbanStatus="OK" client={client} />
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
  overflow-x: auto;
  padding: 0 48px;
  padding-bottom: 24px;
  flex-grow: 1;
`;

ProblemWrapper.displayName = 'ProblemWrapper';

export default ProblemWrapper;
