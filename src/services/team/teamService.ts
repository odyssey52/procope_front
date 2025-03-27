import ApiClient from '@/services/api/apiClient';
import * as types from './teamService.type';

const URLS = {
  READ_TEAM_LIST: '/teams',
};

const api = new ApiClient({ isPublic: false });

export async function readTeamList(): Promise<types.ReadTeamListResponse> {
  const { data } = await api.get<types.ReadTeamListResponse>(URLS.READ_TEAM_LIST);
  return data;
}
