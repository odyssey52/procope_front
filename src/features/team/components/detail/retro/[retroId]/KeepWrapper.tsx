'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetroProblem, deleteRetroProblem } from '@/features/team/services/retroService';
import { CreateRetroProblemPayload } from '@/features/team/services/retroService.type';
import { IconCheckMarkRectangle } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import { sidePanelActions } from '@/shared/store/sidePanel/sidePanel';
import { theme } from '@/shared/styles/theme';
import Button from '@/shared/ui/button/Button';
import MoreArea from '@/shared/ui/button/MoreArea';
import TaskCard from '@/shared/ui/card/TaskCard';
import Empty from '@/shared/ui/empty/Empty';
import ErrorBoundary from '@/shared/ui/errorboundary/ErrorBoundary';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import ItemList from '@/shared/ui/select/ItemList';
import Tag from '@/shared/ui/tag/Tag';
import { JobType } from '@/shared/ui/tag/TagJob';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import KeepSidePanelContent from './KeepSidePanelContent';

interface KeepWrapperProps {
  retroId: string;
  client: Client | null;
}

const EMPTY_TITLE = '등록된 회고 내용이 없습니다.';
const EMPTY_DESCRIPTION = '회고 내용을 추가하여 회고를 진행해 주세요.';

const ERROR_TITLE = '회고 내용 로딩 실패';
const ERROR_DESCRIPTION = '회고 내용을 불러오는 중 문제가 발생했습니다.';

const KeepWrapper = ({ retroId, client }: KeepWrapperProps) => {
  const { handleError } = useApiError();
  const queryClient = useQueryClient();

  const { data, isSuccess, refetch } = useQuery({
    ...retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'KEP' }),
  });

  const subscriptionRef = useRef<any>(null);

  const createRetroProblemMutation = useMutation({
    mutationFn: (payload: CreateRetroProblemPayload) => createRetroProblem({ retroId }, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'KEP' }).queryKey,
      });
    },
  });

  const deleteRetroProblemMutation = useMutation({
    mutationFn: (problemId: string | number) => deleteRetroProblem({ retroId, problemId }, { kanbanStatus: 'KEP' }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'KEP' }).queryKey,
      });
    },
  });

  const handleDeleteRetroProblem = async (problemId: string | number) => {
    try {
      await deleteRetroProblemMutation.mutateAsync(problemId);
    } catch (error) {
      handleError(error);
    }
  };

  const addKeep = async () => {
    try {
      await createRetroProblemMutation.mutateAsync({
        title: '새 카드',
        content: '',
        kanbanStatus: 'KEP',
      });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (client && client.connected) {
      subscriptionRef.current = client.subscribe('/user/topic/retrospectives?kanbanStatus=KEP', (message) => {
        try {
          const keepData = JSON.parse(message.body);
          console.log('📨 실시간 KEEP 리스트 수신:', keepData);
          queryClient.invalidateQueries({
            queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'KEP' }).queryKey,
          });
        } catch (error) {
          handleError(error);
        }
      });

      console.log('✅ KEEP 구독 완료');
    }

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
        console.log('🔌 KEEP 구독 해제');
      }
    };
  }, [client]);

  return (
    <Wrapper>
      <Head>
        <PageSubTitle first="Q1. 좋았던 점은 무엇인가요?">
          <SubTitleRightBox>
            <MoreIndicator count={data?.count} type="transparent" />
            <Button $type="secondary" onClick={addKeep}>
              추가
            </Button>
          </SubTitleRightBox>
        </PageSubTitle>
      </Head>
      {isSuccess && data.count === 0 && <Empty title={EMPTY_TITLE} description={EMPTY_DESCRIPTION} onClick={addKeep} />}
      <ErrorBoundary title={ERROR_TITLE} description={ERROR_DESCRIPTION} onRetry={refetch}>
        {isSuccess && data.count > 0 && (
          <Content>
            <CardList>
              {data?.payload &&
                data.payload.length > 0 &&
                data.payload.map((item) => (
                  <TaskCard
                    key={item.id}
                    onClick={() => {
                      sidePanelActions.open({
                        content: <KeepSidePanelContent retroId={retroId} problemId={item.id} />,
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
                        key={`KeepTastCard-${item.id}`}
                        $size="large"
                        $style="transparent"
                        $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
                      >
                        KEP-{item.id}
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
            </CardList>
          </Content>
        )}
      </ErrorBoundary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Head = styled.div`
  margin: 0 24px;
  padding: 0 24px;
`;

const SubTitleRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-grow: 1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  gap: 12px;
`;

const CardList = styled.div`
  display: flex;
  overflow-x: auto;
  flex-grow: 1;
  width: 100%;
  gap: 16px;
  padding: 0 48px;
  &::-webkit-scrollbar {
    display: none;
  }
  /* &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 0 48px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  } */
`;

KeepWrapper.displayName = 'KeepWrapper';

export default KeepWrapper;
