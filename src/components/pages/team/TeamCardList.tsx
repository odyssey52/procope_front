import TeamCard from '@/components/common/ui/card/TeamCard';
import { ReadTeamListResponse } from '@/services/team/teamService.type';
import styled from 'styled-components';

export interface TeamCardListProps {
  teamList: ReadTeamListResponse['team'];
}

const TeamCardList = ({ teamList }: TeamCardListProps) => {
  return (
    <Wrapper>
      {teamList.map((team, index) => (
        <TeamCard key={index} tag={team.type} name={team.name} description={team.description} members={team.members} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

TeamCardList.displayName = 'TeamCardList';

export default TeamCardList;
