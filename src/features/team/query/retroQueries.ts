import {
  readRetroList,
  readRetro,
  readRetroProblemList,
  readRetroMemberList,
  readRetroProblemDetail,
} from '@/features/team/services/retroService';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import * as types from '@/features/team/services/retroService.type';

const retroQueries = createQueryKeys('retro', {
  readRetroList: (params: types.ReadRetroListParams) => ({
    queryKey: [params.teamId],
    queryFn: () => readRetroList(params),
  }),
  readRetro: (params: types.ReadRetroParams) => ({
    queryKey: [params.teamId, params.retroId],
    queryFn: () => readRetro(params),
  }),
  readRetroProblemList: (params: types.ReadRetroProblemListParams) => ({
    queryKey: [params.retroId, params.kanbanStatus],
    queryFn: () => readRetroProblemList(params),
  }),
  readRetroMemberList: (params: types.ReadRetroMemberListParams) => ({
    queryKey: [params.teamId, params.retroId],
    queryFn: () => readRetroMemberList(params),
  }),
  readRetroProblemDetail: (params: types.ReadRetroProblemDetailParams) => ({
    queryKey: [params.retroId, params.problemId],
    queryFn: () => readRetroProblemDetail(params),
  }),
});

export default retroQueries;
