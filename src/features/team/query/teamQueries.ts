import { readTeamList, readTeamDetail, readTeamUser, readTeamRoleCount } from '@/features/team/services/teamService';
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
  readTeamRoleCount: (params: types.ReadTeamRoleCountParams) => ({
    queryKey: [params.role],
    queryFn: () => readTeamRoleCount(params),
  }),
  readTeamUser: (params: types.ReadTeamUsersParams) => ({
    queryKey: [params.teamId],
    queryFn: () => readTeamUser(params),
  }),
});

export default teamQueries;
