import TeamCard, { TagList } from '@/components/common/ui/card/TeamCard';
import styled from 'styled-components';

export interface TeamCardListProps {
  teamList: {
    tag: keyof TagList;
    name: string;
    description: string;
    members: {
      nickname?: string;
      image?: string;
    }[];
  }[];
}

const TeamCardList = ({ teamList }: TeamCardListProps) => {
  return (
    <Wrapper>
      {teamList.map((team, index) => (
        <TeamCard key={index} tag={team.tag} name={team.name} description={team.description} members={team.members} />
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
