import { readRetroList, readRetro } from '@/features/team/services/retroService';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import * as types from '@/features/team/services/retroService.type';

const teamQueries = createQueryKeys('team', {
  readRetroList: (params: types.ReadRetroListParams) => ({
    queryKey: [params.teamId],
    queryFn: () => readRetroList(params),
  }),
  readRetro: (params: types.ReadRetroParams) => ({
    queryKey: [params.teamId, params.retroId],
    queryFn: () => readRetro(params),
  }),
});

export default teamQueries;
