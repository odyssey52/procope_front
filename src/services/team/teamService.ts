import ApiClient from '@/services/api/apiClient';
import * as types from './teamService.type';

const URLS = {
  READ_TEAM_LIST: '/teams',
  CREATE_TEAM: '/teams',
};

const api = new ApiClient({ isPublic: false });

export async function readTeamList(): Promise<types.ReadTeamListResponse> {
  const { data } = await api.get<types.ReadTeamListResponse>(URLS.READ_TEAM_LIST);
  return data;
}

export async function createTeam(payload: types.CreateTeamRequest): Promise<types.CreateTeamResponse> {
  const { data } = await api.post<types.CreateTeamResponse>(URLS.CREATE_TEAM, payload);
  return data;
}
