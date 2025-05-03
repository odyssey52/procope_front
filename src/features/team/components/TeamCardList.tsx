import TeamCard from '@/shared/ui/card/TeamCard';
import { ReadTeamListResponse } from '@/features/team/services/teamService.type';
import styled from 'styled-components';
import { useEffect } from 'react';

export interface TeamCardListProps {
  teamList: ReadTeamListResponse['team'];
}

const TeamCardList = ({ teamList }: TeamCardListProps) => {
  useEffect(() => {
    throw new Error('팀 카드를 불러오는 중 오류가 발생했습니다.');
  }, []);

  return (
    <Wrapper>
      {teamList.map((team, index) => (
        <TeamCard
          key={index}
          tag={team.type}
          name={team.name}
          description={team.description}
          members={team.members}
          teamId={team.teamId}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
  gap: 24px;
`;

TeamCardList.displayName = 'TeamCardList';

export default TeamCardList;
