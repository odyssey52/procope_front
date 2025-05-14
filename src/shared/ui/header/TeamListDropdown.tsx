'use client';

import teamQueries from '@/features/team/query/teamQueries';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const TeamListDropdown = () => {
  const router = useRouter();
  const { data: teamData } = useSuspenseQuery({ ...teamQueries.readTeamList });

  const handleTeamSelect = (teamId: string) => {
    router.push(`/team/${teamId}/dashboard`);
  };
  return (
    <Wrapper>
      <div style={{ position: 'relative' }}>
        {teamData && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '8px',
              marginTop: '4px',
              zIndex: 1000,
            }}
          >
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
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  /* background-color: ${({ theme }) => theme.sementicColors.bg.inverse}; */
`;

TeamListDropdown.displayName = 'TeamListDropdown';

export default TeamListDropdown;
