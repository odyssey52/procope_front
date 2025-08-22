import teamQueries from '@/features/team/query/teamQueries';
import { MESSAGES } from '@/shared/constants/messages';
import { toastActions } from '@/shared/store/modal/toast';
import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Button from '@/shared/ui/button/Button';
import Error from '@/shared/ui/error/Error';
import Text from '@/shared/ui/Text';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import MemberList from './MemberList';
import SkeletonMemberPage from './SkeletonMemberPage';

const MemberPage = () => {
  const params = useParams();
  const teamId = params.teamId as string;

  const {
    data: teamUser,
    isLoading: isTeamUserLoading,
    isError: isTeamUserError,
  } = useQuery({
    ...teamQueries.readTeamUser({ teamId }),
  });

  const {
    data: teamData,
    isLoading: isTeamDataLoading,
    isError: isTeamDataError,
  } = useQuery({
    ...teamQueries.readTeamDetail({ teamId }),
  });

  const isLoading = isTeamUserLoading || isTeamDataLoading;
  const isError = isTeamUserError || isTeamDataError;
  const hasData = teamUser && teamData;

  const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}team/invite/${teamData?.inviteUrl}`;

  const path = [
    { name: '팀 관리', path: '/team' },
    { name: '참여관리', path: `/team/${teamId}/manage/member` },
  ];

  const teamImage =
    teamData?.type === 'SQUAD'
      ? '/assets/icons/graphic/glass/user-on.png'
      : '/assets/icons/graphic/glass/setting-on.png';

  const copyToLink = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toastActions.open({
          state: 'success',
          title: MESSAGES.CLIPBOARD_COPY_SUCCESS,
        });
      },
      (err) => {
        toastActions.open({
          state: 'error',
          title: MESSAGES.CLIPBOARD_COPY_ERROR,
        });
        console.error('클립보드 복사 실패:', err);
      },
    );
  };

  if (isLoading) return <SkeletonMemberPage />;
  if (isError) return <Error title="에러 발생" description="팀 참여관리 정보를 불러오는 중 오류가 발생했습니다." />;
  if (!hasData) return null;
  return (
    <Wrapper>
      <Container>
        <TopSection>
          <Head>
            <Breadcrumbs paths={path} />
            <PageTitle title="팀 참여관리" />
          </Head>
          <SubText>초대하고 싶은 사람에게 링크를 전달하여 팀원을 추가할 수 있습니다.</SubText>
        </TopSection>
        <BottomSection>
          <Team>
            <TeamInfo>
              <Icon>
                <img src={teamImage} width={54} height={54} alt="팀 프로필" />
              </Icon>
              <TeamText>
                <Title>{teamData?.name}</Title>
                <Text variant="body_16_medium" color="secondary" ellipsis>
                  {inviteUrl}
                </Text>
              </TeamText>
            </TeamInfo>
            <Button onClick={() => copyToLink(inviteUrl)}>링크 복사</Button>
          </Team>
          <MemberList teamUser={teamUser} teamData={teamData} />
        </BottomSection>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
  padding: 24px;
  margin: 24px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex-grow: 1;
`;
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SubText = styled.span`
  ${({ theme }) => theme.fontStyle.body_14_medium};
  color: ${({ theme }) => theme.sementicColors.text.tertiary};
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
`;
const Team = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
  gap: 32px;
`;
const TeamInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Icon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.sementicColors.bg.info_subtle};
  flex-shrink: 0;
`;
const TeamText = styled.div`
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fontStyle.heading_18}
  color: ${({ theme }) => theme.sementicColors.text.primary};
`;
MemberPage.displayName = 'MemberPage';

export default MemberPage;
