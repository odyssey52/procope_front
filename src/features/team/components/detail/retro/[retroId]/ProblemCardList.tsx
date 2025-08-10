'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetroProblem, deleteRetroProblem } from '@/features/team/services/retroService';
import { CreateRetroProblemPayload, ProblemKanbanStatus } from '@/features/team/services/retroService.type';
import { IconCheckMarkRectangle, IconPlus } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import { sidePanelActions } from '@/shared/store/sidePanel/sidePanel';
import { theme } from '@/shared/styles/theme';
import MoreArea from '@/shared/ui/button/MoreArea';
import TaskCard from '@/shared/ui/card/TaskCard';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import Divider from '@/shared/ui/line/Divider';
import ItemList from '@/shared/ui/select/ItemList';
import Tag from '@/shared/ui/tag/Tag';
import { JobType } from '@/shared/ui/tag/TagJob';
import Text from '@/shared/ui/Text';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CreateCardButton from './CreateCardButton';
import ProblemSidePanelContent from './ProblemSidePanelContent';

interface ProblemCardListProps {
  retroId: string;
  kanbanStatus: ProblemKanbanStatus;
  client: Client | null;
}
// key 는 ProblemKanbanStatus 와 동일
const KANBAN_STATUS = {
  RCG: {
    title: '개선점',
    color: theme.sementicColors.bg.danger,
  },
  PRG: {
    title: '개선중',
    color: theme.sementicColors.bg.warning_bold,
  },
  OK: {
    title: '개선완료',
    color: theme.sementicColors.bg.success_bold,
  },
};

const ProblemCardList = ({ retroId, kanbanStatus, client }: ProblemCardListProps) => {
  const { handleError } = useApiError();
  const subscriptionRef = useRef<any>(null);
  const queryClient = useQueryClient();
  const { data, isSuccess, refetch } = useQuery({
    ...retroQueries.readRetroProblemList({ retroId, kanbanStatus }),
  });

  const createRetroProblemMutation = useMutation({
    mutationFn: (payload: CreateRetroProblemPayload) => createRetroProblem({ retroId }, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus }).queryKey,
      });
    },
  });

  const deleteRetroProblemMutation = useMutation({
    mutationFn: (problemId: string | number) => deleteRetroProblem({ retroId, problemId }, { kanbanStatus }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus }).queryKey,
      });
    },
  });

  const handleCreateRCG = async () => {
    try {
      await createRetroProblemMutation.mutateAsync({
        title: '새 카드',
        content: '',
        kanbanStatus,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteRetroProblem = async (problemId: string | number) => {
    try {
      await deleteRetroProblemMutation.mutateAsync(problemId);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (client && client.connected && kanbanStatus && retroId) {
      subscriptionRef.current = client.subscribe(
        `/user/topic/retrospectives?kanbanStatus=${kanbanStatus}`,
        (message) => {
          queryClient.invalidateQueries({
            queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus }).queryKey,
          });
        },
      );
    }
    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, [client, kanbanStatus, retroId]);

  return (
    <Wrapper>
      <Head>
        <Title>
          <TextWrapper>
            <Text variant="body_16_semibold" color="primary">
              {KANBAN_STATUS[kanbanStatus as keyof typeof KANBAN_STATUS].title}
            </Text>
            <MoreIndicator count={data?.count} type="transparent" />
          </TextWrapper>
          <PlusButton onClick={handleCreateRCG}>
            <IconPlus size={24} />
          </PlusButton>
        </Title>
        <Divider
          color={KANBAN_STATUS[kanbanStatus as keyof typeof KANBAN_STATUS].color}
          padding={0}
          width={4}
          radius={2}
        />
      </Head>
      {isSuccess && (
        <Content>
          <CardList>
            {data?.payload &&
              data.payload.length > 0 &&
              data.payload.map((item) => (
                <TaskCard
                  key={item.id}
                  onClick={() => {
                    sidePanelActions.open({
                      content: <ProblemSidePanelContent retroId={retroId} problemId={item.id} />,
                      moreMenu: (
                        <MoreArea
                          size={24}
                          menuList={
                            <ItemList
                              width="112px"
                              selectOptionList={[{ value: '삭제', label: '삭제' }]}
                              valueHandler={() => handleDeleteRetroProblem(item.id)}
                            />
                          }
                        />
                      ),
                    });
                  }}
                  tags={[
                    <Tag
                      key={`PBMTastCard-${item.id}`}
                      $size="large"
                      $style="transparent"
                      $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
                    >
                      PBM-{item.id}
                    </Tag>,
                  ]}
                  tagJob={item.userRole as JobType}
                  title={item.title}
                  startDate={item.updatedAt}
                  user={{
                    nickname: item.createUserInfo.name,
                    profileImage: item.createUserInfo.profileImageUrl,
                  }}
                />
              ))}
            <CreateCardButton onClick={handleCreateRCG} />
          </CardList>
        </Content>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 100%;
  border-radius: 16px;
  background: ${({ theme }) => theme.sementicColors.bg.tertiary};
  height: fit-content;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 0;
  gap: 4px;
  justify-content: space-between;
`;

const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Content = styled.div`
  display: flex;
  gap: 8px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

ProblemCardList.displayName = 'RCGWrapper';

export default ProblemCardList;
