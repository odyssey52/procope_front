import ApiClient from '@/shared/api/apiClient';
import { UserRole } from '@/shared/types/team';
import * as types from './teamService.type';

const URLS = {
  CREATE_TEAM: '/teams',
  READ_TEAM_LIST: '/teams',
  READ_TEAM_DETAIL: (teamId: string) => `/teams/${teamId}`,
  UPDATE_TEAM: (teamId: string) => `/teams/${teamId}`,
  DELETE_TEAM: (teamId: string) => `/teams/${teamId}`,

  CREATE_INVITE_TEAM: '/teams/invite', // 초대 링크를 통해 팀 합류
  READ_TEAM_ROLE_COUNT: (role: UserRole) => `/teams/count?role=${role}`,
  SECESSION_TEAM: (teamId: string) => `/teams/users/${teamId}`,

  CREATE_RETRO: (teamId: string) => `/retrospectives/${teamId}`,
  READ_RETRO_LIST: (teamId: string) => `/retrospectives/${teamId}`,
  READ_RETRO: (teamId: string, retroId: string) => `/retrospectives/${teamId}/${retroId}`,
};

const api = new ApiClient({ isPublic: false });
// const testApi = new ApiClient({ isPublic: false, baseURL: process.env.NEXT_PUBLIC_TEST_API_HOST });

export async function readTeamList(): Promise<types.ReadTeamListResponse> {
  const { data } = await api.get<types.ReadTeamListResponse>(URLS.READ_TEAM_LIST);
  return data;
}

export async function readTeamDetail(params: types.ReadTeamDetailParams): Promise<types.ReadTeamDetailResponse> {
  const { data } = await api.get<types.ReadTeamDetailResponse>(URLS.READ_TEAM_DETAIL(params.teamId));
  return data;
}

export async function readTeamRoleCount(
  params: types.ReadTeamRoleCountParams,
): Promise<types.ReadTeamRoleCountResponse> {
  const { data } = await api.get<types.ReadTeamRoleCountResponse>(URLS.READ_TEAM_ROLE_COUNT(params.role));
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

export async function updateTeam(
  payload: types.UpdateTeamPayload,
  params: types.UpdateTeamParams,
): Promise<types.UpdateTeamResponse> {
  const { data } = await api.put<types.UpdateTeamResponse>(URLS.UPDATE_TEAM(params.teamId), payload);
  return data;
}

export async function deleteTeam(params: types.DeleteTeamParams) {
  const { data } = await api.delete(URLS.DELETE_TEAM(params.teamId));
  return data;
}

export async function secessionTeam(params: types.SecessionTeamParams) {
  const { data } = await api.delete(URLS.SECESSION_TEAM(params.teamId));
  return data;
}

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
