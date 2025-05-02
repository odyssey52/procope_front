import ApiClient from '@/shared/api/apiClient';
import * as types from './teamService.type';

const URLS = {
  READ_TEAM_LIST: '/teams',
  READ_TEAM_DETAIL: (teamId: string) => `/teams/${teamId}`,
  CREATE_TEAM: '/teams',
  CREATE_INVITE_TEAM: '/teams/invite', // 초대 링크를 통해 팀 합류
};

const api = new ApiClient({ isPublic: false });

export async function readTeamList(): Promise<types.ReadTeamListResponse> {
  const { data } = await api.get<types.ReadTeamListResponse>(URLS.READ_TEAM_LIST);
  return data;
}

export async function readTeamDetail(params: types.ReadTeamDetailParams): Promise<types.ReadTeamDetailResponse> {
  const { data } = await api.get<types.ReadTeamDetailResponse>(URLS.READ_TEAM_DETAIL(params.teamId));
  return data;
}

export async function createTeam(payload: types.CreateTeamPayload): Promise<types.CreateTeamResponse> {
  const { data } = await api.post<types.CreateTeamResponse>(URLS.CREATE_TEAM, payload);
  return data;
}

export async function createInviteTeam(
  payload: types.CreateInviteTeamPayload,
): Promise<types.CreateInviteTeamResponse> {
  const { data } = await api.post<types.CreateInviteTeamResponse>(URLS.CREATE_INVITE_TEAM, payload);
  return data;
}
