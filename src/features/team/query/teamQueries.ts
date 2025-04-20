import { readTeamList } from '@/features/team/services/teamService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

const teamQueries = createQueryKeys('team', {
  readTeamList: {
    queryKey: null,
    queryFn: readTeamList,
  },
});

export default teamQueries;
