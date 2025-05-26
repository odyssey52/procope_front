import teamQueries from '@/features/team/query/teamQueries';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import SettingSection from './SettingSection';

const Setting = () => {
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

export default Setting;

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0px 86px 0px;
  background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
`;
