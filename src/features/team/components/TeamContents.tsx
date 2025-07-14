'use client';

import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Empty from '@/shared/ui/empty/Empty';
import ErrorBoundary from '@/shared/ui/errorboundary/ErrorBoundary';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import teamQueries from '../query/teamQueries';
import ControlBox from './ControlBox';
import TeamCardList from './TeamCardList';

const EMPTY_TITLE = '참여 중인 팀이 없습니다.';
const EMPTY_DESCRIPTION = '팀을 생성하거나 다른 생성자에게 초대받으세요';

const PATH = [
  {
    name: '팀 목록',
    path: '/team',
    clickable: true,
  },
];

function TeamContent() {
  const router = useRouter();
  const { data } = useSuspenseQuery({ ...teamQueries.readTeamList });
  const queryClient = useQueryClient();

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: teamQueries.readTeamList.queryKey });
  };

  return (
    <Content>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={PATH} />
          <PageTitle title="Team" />
          <PageSubTitle first="총" point={`${data?.team?.length || 0}`} last="개">
            <ControlBox />
          </PageSubTitle>
        </TitleBox>
      </Head>
      {(!data?.team || data.team.length === 0) && (
        <EmptyBox>
          <Empty title={EMPTY_TITLE} description={EMPTY_DESCRIPTION} onClick={() => router.push('/team/create')} />
        </EmptyBox>
      )}
      <ErrorBoundary
        title="팀 목록 로딩 실패"
        description="팀 목록을 불러오는 중 문제가 발생했습니다."
        onRetry={refetch}
      >
        {data?.team && data.team.length > 0 && <TeamCardList teamList={data.team} />}
      </ErrorBoundary>
    </Content>
  );
}

const Content = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  max-width: 924px;
`;
const Head = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

TeamContent.displayName = 'TeamContent';
export default TeamContent;
