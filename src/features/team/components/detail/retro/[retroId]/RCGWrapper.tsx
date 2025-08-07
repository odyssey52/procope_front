'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { createRetroProblem } from '@/features/team/services/retroService';
import { CreateRetroProblemPayload } from '@/features/team/services/retroService.type';
import { IconCheckMarkRectangle, IconPlus } from '@/shared/assets/icons/line';
import useApiError from '@/shared/hooks/useApiError';
import { theme } from '@/shared/styles/theme';
import TaskCard from '@/shared/ui/card/TaskCard';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import Divider from '@/shared/ui/line/Divider';
import Tag from '@/shared/ui/tag/Tag';
import { JobType } from '@/shared/ui/tag/TagJob';
import Text from '@/shared/ui/Text';
import { Client } from '@stomp/stompjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CreateCardButton from './CreateCardButton';

interface RCGWrapperProps {
  retroId: string;
  client: Client | null;
}

const EMPTY_TITLE = '등록된 회고 내용이 없습니다.';
const EMPTY_DESCRIPTION = '회고 내용을 추가하여 회고를 진행해 주세요.';

const ERROR_TITLE = '회고 내용 로딩 실패';
const ERROR_DESCRIPTION = '회고 내용을 불러오는 중 문제가 발생했습니다.';

const RCGWrapper = ({ retroId, client }: RCGWrapperProps) => {
  const { handleError } = useApiError();
  const subscriptionRef = useRef<any>(null);
  const queryClient = useQueryClient();
  const { data, isSuccess, refetch } = useQuery({
    ...retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'RCG' }),
  });

  const createRetroProblemMutation = useMutation({
    mutationFn: (payload: CreateRetroProblemPayload) => createRetroProblem({ retroId }, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'RCG' }).queryKey,
      });
    },
  });

  const handleCreateRCG = async () => {
    try {
      await createRetroProblemMutation.mutateAsync({
        title: '새 카드',
        content: '',
        kanbanStatus: 'RCG',
      });
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (client && client.connected) {
      subscriptionRef.current = client.subscribe('/user/topic/retrospectives?kanbanStatus=RCG', (message) => {
        queryClient.invalidateQueries({
          queryKey: retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'RCG' }).queryKey,
        });
      });
    }
    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, [client]);

  return (
    <Wrapper>
      <Head>
        <Title>
          <TextWrapper>
            <Text variant="body_16_semibold" color="primary">
              개선점
            </Text>
            <MoreIndicator count={data?.count} type="transparent" />
          </TextWrapper>
          <IconPlus size={24} />
        </Title>
        <Divider color={theme.sementicColors.bg.danger} padding={0} width={4} radius={2} />
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
                    //   sidePanelActions.open({
                    //     content: <KeepSidePanelContent retroId={retroId} problemId={item.id} />,
                    //     moreMenu: (
                    //       <MoreArea
                    //         size={24}
                    //         menuList={
                    //           <ItemList
                    //             width="112px"
                    //             selectOptionList={[{ value: '삭제' }]}
                    //             valueHandler={() => handleDeleteRetroProblem(item.id)}
                    //           />
                    //         }
                    //       />
                    //     ),
                    //   });
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

RCGWrapper.displayName = 'RCGWrapper';

export default RCGWrapper;
