'use client';

import retroQueries from '@/features/team/query/retroQueries';
import { ReadRetroProblemListResponse } from '@/features/team/services/retroService.type';
import Button from '@/shared/ui/button/Button';
import TaskCard from '@/shared/ui/card/TaskCard';
import Empty from '@/shared/ui/empty/Empty';
import ErrorBoundary from '@/shared/ui/errorboundary/ErrorBoundary';
import MoreIndicator from '@/shared/ui/indicator/MoreIndicator';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Tag from '@/shared/ui/tag/Tag';
import { IconCheckMarkRectangle } from '@/shared/assets/icons/line';
import { theme } from '@/shared/styles/theme';
import { Client } from '@stomp/stompjs';
import { RetroCardRole } from '@/shared/ui/card/RetroCard';
import { sidePanelActions } from '@/shared/store/sidePanel/sidePanel';
import KeepSidePanelContent from './KeepSidePanelContent';

interface KeepWrapperProps {
  retroId: string;
  client: Client | null;
}

const EMPTY_TITLE = '등록된 회고 내용이 없습니다.';
const EMPTY_DESCRIPTION = '회고 내용을 추가하여 회고를 진행해 주세요.';

const ERROR_TITLE = '회고 내용 로딩 실패';
const ERROR_DESCRIPTION = '회고 내용을 불러오는 중 문제가 발생했습니다.';

const mockData: ReadRetroProblemListResponse = {
  count: 4,
  payload: [
    {
      id: 1,
      userRole: 'MEMBER',
      cardId: 'KEP-01',
      createUserInfo: {
        id: '1',
        name: '홍길동',
        profileImageUrl: '/assets/icons/graphic/profile/photo01.svg',
        role: 'development',
      },
      title: '좋았던 점 1',
      content: '좋았던 점 1 내용',
      kanbanStatus: 'KEP',
      updatedAt: '2025-07-25T02:32:11.291Z',
    },
    {
      id: 2,
      userRole: 'MEMBER',
      cardId: 'KEP-02',
      createUserInfo: {
        id: '2',
        name: '홍길동',
        profileImageUrl: '/assets/icons/graphic/profile/photo02.svg',
        role: 'development',
      },
      title: '좋았던 점 2',
      content: '좋았던 점 2 내용',
      kanbanStatus: 'KEP',
      updatedAt: '2025-07-25T02:32:11.291Z',
    },
    {
      id: 3,
      userRole: 'MEMBER',
      cardId: 'KEP-03',
      createUserInfo: {
        id: '3',
        name: '홍길동',
        profileImageUrl: '/assets/icons/graphic/profile/photo03.svg',
        role: 'development',
      },
      title: '좋았던 점 3',
      content: '좋았던 점 3 내용',
      kanbanStatus: 'KEP',
      updatedAt: '2025-07-25T02:32:11.291Z',
    },
    {
      id: 4,
      userRole: 'MEMBER',
      cardId: 'KEP-04',
      createUserInfo: {
        id: '4',
        name: '홍길동',
        profileImageUrl: '/assets/icons/graphic/profile/photo04.svg',
        role: 'development',
      },
      title: '좋았던 점 4',
      content: '좋았던 점 4 내용',
      kanbanStatus: 'KEP',
      updatedAt: '2025-07-25T02:32:11.291Z',
    },
  ],
};

const KeepWrapper = ({ retroId, client }: KeepWrapperProps) => {
  const { data, isSuccess, refetch } = useQuery({
    ...retroQueries.readRetroProblemList({ retroId, kanbanStatus: 'KEP' }),
  });

  const addKeep = () => {
    sidePanelActions.open({
      content: <KeepSidePanelContent retroId={retroId} />,
    });
  };

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
                    tags={[
                      <Tag
                        key={item.cardId}
                        $size="large"
                        $style="transparent"
                        $leftIcon={<IconCheckMarkRectangle color={theme.sementicColors.icon.brand} />}
                      >
                        {item.cardId}
                      </Tag>,
                    ]}
                    tagJob={item.createUserInfo.role as RetroCardRole}
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
  margin-left: 24px;
  padding-left: 24px;
`;

const CardList = styled.div`
  display: flex;
  overflow-x: auto;
  flex-grow: 1;
  width: 100%;
  padding-bottom: 8px;
  gap: 16px;
`;

KeepWrapper.displayName = 'KeepWrapper';

export default KeepWrapper;
