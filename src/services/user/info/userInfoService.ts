import ApiClient from '@/services/api/apiClient';
import * as types from './userInfoService.type';

const URLS = {
  READ_USER_INFO: '/user/info',
  UPDATE_USER_INFO: '/user/info',
  READ_USER_INFO_ROLES: '/user/info/roles',
  READ_USER_INFO_PREFERENCES: '/user/info/preferences',
};

const api = new ApiClient({ isPublic: false });

export async function readUserInfo(): Promise<types.ReadUserInfoResponse> {
  const { data } = await api.get<types.ReadUserInfoResponse>(URLS.READ_USER_INFO);
  return data;
}

export async function updateUserInfo(payload: types.UpdateUserInfoPayload): Promise<types.UpdateUserInfoResponse> {
  const res = await api.put<types.UpdateUserInfoResponse>(URLS.UPDATE_USER_INFO, payload);
  return res.data;
}

export async function readUserInfoRoles(): Promise<types.ReadUserInfoRolesResponse> {
  const { data } = await api.get<types.ReadUserInfoRolesResponse>(URLS.READ_USER_INFO_ROLES);
  return data;
}

export async function readUserInfoPreferences(): Promise<types.ReadUserInfoPreferencesResponse> {
  const { data } = await api.get<types.ReadUserInfoPreferencesResponse>(URLS.READ_USER_INFO_PREFERENCES);
  return data;
}
