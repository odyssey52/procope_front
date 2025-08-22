import teamQueries from '@/features/team/query/teamQueries';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import SettingSection from './SettingSection';

const TeamSettingPage = () => {
  const params = useParams();
  const teamId = params.teamId as string;

  const { data: teamData } = useQuery({
    ...teamQueries.readTeamDetail({ teamId }),
    enabled: !!teamId,
  });
  if (!teamData) return <></>;

  return (
    <Wrapper>
      <SettingSection teamData={teamData} teamId={teamId} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
  overflow-y: auto;
`;

TeamSettingPage.displayName = 'TeamSettingPage';

export default TeamSettingPage;
