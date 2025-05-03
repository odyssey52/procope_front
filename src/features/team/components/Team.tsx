import HeaderLayout from '@/features/layout/HeaderLayout';
import teamQueries from '@/features/team/query/teamQueries';
import useAuthStore from '@/shared/lib/store/auth/auth';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Container from '@/shared/ui/Container';
import Empty from '@/shared/ui/empty/Empty';
import ErrorBoundary from '@/shared/ui/errorboundary/ErrorBoundary';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import ControlBox from './ControlBox';
import TeamCardList from './TeamCardList';

const EMPTY_TITLE = '참여 중인 팀이 없습니다.';
const EMPTY_DESCRIPTION = '팀을 생성하거나 다른 생성자에게 초대받으세요';

// 데이터 페칭을 담당하는 컴포넌트
function TeamContent() {
  const router = useRouter();
  const paths = {
    '팀 목록': '/team',
  };
  const { data } = useSuspenseQuery({ ...teamQueries.readTeamList });
  const queryClient = useQueryClient();

  return (
    <Content>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={paths} />
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
        onRetry={() => {
          // 쿼리 다시 실행
          queryClient.invalidateQueries({ queryKey: teamQueries.readTeamList.queryKey });
        }}
      >
        {data?.team && data.team.length > 0 && <TeamCardList teamList={data.team} />}
      </ErrorBoundary>
    </Content>
  );
}

// 로딩 상태를 표시하는 컴포넌트
function LoadingFallback() {
  return (
    <Content>
      <Head>
        <TitleBox>
          <Breadcrumbs paths={{ '팀 목록': '/team' }} />
          <PageTitle title="Team" />
          <PageSubTitle first="총" point="0" last="개">
            <ControlBox />
          </PageSubTitle>
        </TitleBox>
      </Head>
      <SkeletonContainer>
        {[1, 2, 3].map((index) => (
          <SkeletonCard key={index}>
            <SkeletonTag />
            <SkeletonTitle />
            <SkeletonDescription />
            <SkeletonMemberList>
              {[1, 2, 3].map((memberIndex) => (
                <SkeletonMember key={memberIndex} />
              ))}
            </SkeletonMemberList>
          </SkeletonCard>
        ))}
      </SkeletonContainer>
    </Content>
  );
}

// 스켈레톤 UI 스타일 컴포넌트
const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  padding: 24px 0;
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.2s ease-in-out infinite;
`;

const SkeletonTag = styled(SkeletonBase)`
  width: 60px;
  height: 24px;
  border-radius: 4px;
`;

const SkeletonTitle = styled(SkeletonBase)`
  width: 80%;
  height: 28px;
  border-radius: 4px;
`;

const SkeletonDescription = styled(SkeletonBase)`
  width: 100%;
  height: 20px;
  border-radius: 4px;
`;

const SkeletonMemberList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const SkeletonMember = styled(SkeletonBase)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

// 메인 Team 컴포넌트
const Team = () => {
  const { accessToken } = useAuthStore();

  return (
    <HeaderLayout>
      <TeamContainer>
        <Suspense fallback={<LoadingFallback />}>
          <TeamContent />
        </Suspense>
      </TeamContainer>
    </HeaderLayout>
  );
};

const TeamContainer = styled(Container)`
  flex-grow: 1;
`;
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
Team.displayName = 'Team';

export default Team;
