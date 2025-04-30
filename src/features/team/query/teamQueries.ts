import { readTeamList, readTeamDetail } from '@/features/team/services/teamService';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import * as types from '@/features/team/services/teamService.type';

const teamQueries = createQueryKeys('team', {
  readTeamList: {
    queryKey: null,
    queryFn: readTeamList,
  },
  readTeamDetail: (params: types.ReadTeamDetailParams) => ({
    queryKey: [params.teamId],
    queryFn: () => readTeamDetail(params),
  }),
});

export default teamQueries;
