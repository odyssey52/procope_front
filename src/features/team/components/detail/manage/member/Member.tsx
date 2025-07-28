import Breadcrumbs from '@/shared/ui/breadcrumbs/Breadcrumbs';
import Button from '@/shared/ui/button/Button';
import PageTitle from '@/shared/ui/title/PageTitle';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import teamQueries from '@/features/team/query/teamQueries';
import { toastActions } from '@/shared/store/modal/toast';
import { MESSAGES } from '@/shared/constants/messages';
import MemberList from './MemberList';

const Member = () => {
  const params = useParams();
  const teamId = params.teamId as string;

  const { data: teamUser } = useQuery({
    ...teamQueries.readTeamUser({ teamId }),
    enabled: !!teamId,
  });
  const { data: teamData } = useQuery({
    ...teamQueries.readTeamDetail({ teamId }),
    enabled: !!teamId,
  });

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

  if (!teamUser || !teamData) return null;

  return (
    <Wrapper>
      <Container>
        <TopSection>
          <Head>
            <Breadcrumbs paths={path} />
            <PageTitle title="팀 참여관리" />
          </Head>
          <SubText>
            초대하고 싶은 사람에게 링크를 전달하여 팀원을 추가할 수 있습니다. 요청승인 탭에서 팀원의 참여 요청을 승인해
            주세요.
          </SubText>
        </TopSection>
        <BottomSection>
          <Team>
            <TeamInfo>
              <Icon>
                <img src={teamImage} width={54} height={54} alt="팀 프로필" />
              </Icon>
              <TeamText>
                <Title>{teamData?.name}</Title>
                <TeamLink>{inviteUrl}</TeamLink>
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

export default Member;

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0px;
  background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
`;
const Team = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  align-items: center;
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
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.sementicColors.bg.info_subtle};
`;
const TeamText = styled.div`
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Title = styled.div`
  ${({ theme }) => theme.fontStyle.heading_18}
  color: ${({ theme }) => theme.sementicColors.text.primary}
`;
const TeamLink = styled.div`
  ${({ theme }) => theme.fontStyle.body_16_medium}
  color: ${({ theme }) => theme.sementicColors.text.primary}
`;
