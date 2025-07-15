import ApiClient from '@/shared/api/apiClient';
import * as types from './retroService.type';

const URLS = {
  READ_RETRO_LIST: (teamId: string) => `/retrospectives/${teamId}`,
  CREATE_RETRO: (teamId: string) => `/retrospectives/${teamId}`,
  READ_RETRO: (teamId: string, retroId: string) => `/retrospectives/${teamId}/${retroId}`,
};

const api = new ApiClient({ isPublic: false });

export async function readRetroList(params: types.ReadRetroListParams): Promise<types.ReadRetroListResponse> {
  const { data } = await api.get<types.ReadRetroListResponse>(URLS.READ_RETRO_LIST(params.teamId));
  return data;
}

export async function createRetro(payload: types.CreateRetroPayload): Promise<types.CreateRetroResponse> {
  const { data } = await api.post<types.CreateRetroResponse>(URLS.CREATE_RETRO(payload.teamId), {
    title: payload.title,
  });
  return data;
}
export async function readRetro(params: types.ReadRetroParams): Promise<types.ReadRetroResponse> {
  const { data } = await api.get<types.ReadRetroResponse>(URLS.READ_RETRO(params.teamId, params.retroId));
  return data;
}
