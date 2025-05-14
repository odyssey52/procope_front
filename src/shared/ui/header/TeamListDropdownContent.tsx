'use client';

import teamQueries from '@/features/team/query/teamQueries';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const TeamListDropdownContent = () => {
  const router = useRouter();
  const { data: teamData } = useSuspenseQuery({ ...teamQueries.readTeamList });

  const handleTeamSelect = (teamId: string) => {
    router.push(`/team/${teamId}/dashboard`);
  };
  return (
    <Wrapper>
      {teamData?.team.map((team) => (
        <button
          key={team.teamId}
          type="button"
          onClick={() => handleTeamSelect(team.teamId)}
          style={{
            display: 'block',
            width: '100%',
            padding: '8px 16px',
            textAlign: 'left',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          {team.name}
        </button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
`;

TeamListDropdownContent.displayName = 'TeamListDropdownContent';

export default TeamListDropdownContent;
