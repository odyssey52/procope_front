import { ReadTeamListResponse } from '@/features/team/services/teamService.type';
import TeamCard from '@/shared/ui/card/TeamCard';
import { Grid } from '@/shared/ui/Grid';
import styled from 'styled-components';

export interface TeamCardListProps {
  teamList: ReadTeamListResponse['team'];
}

const TeamCardList = ({ teamList }: TeamCardListProps) => {
  return (
    <Grid gap={24} cols={{ sm: 2, md: 3 }}>
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
    </Grid>
  );
};

const Wrapper = styled.div``;

TeamCardList.displayName = 'TeamCardList';

export default TeamCardList;
