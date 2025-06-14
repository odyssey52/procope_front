import { readTeamList, readTeamDetail, readRetroList, readTeamRoleCount } from '@/features/team/services/teamService';
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
  readRetroList: (params: types.ReadRetroListParams) => ({
    queryKey: [params.teamId],
    queryFn: () => readRetroList(params),
  }),
  readTeamRoleCount: (params: types.ReadTeamRoleCountParams) => ({
    queryKey: [params.role],
    queryFn: () => readTeamRoleCount(params),
  }),
});

export default teamQueries;
