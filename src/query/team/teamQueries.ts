import { readTeamList } from '@/services/team/teamService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const teamQueries = createQueryKeys('team', {
  readTeamList: () => ({
    queryKey: ['teamList'],
    queryFn: () => readTeamList(),
  }),
});

export default teamQueries;
