import ApiClient from '@/services/api/apiClient';
import * as types from './userInfoService.type';

const URLS = {
  READ_USER_INFO: '/user/info',
  UPDATE_USER_INFO: '/user/info',
  READ_USER_INFO_ROLES: '/user/info/roles',
  READ_USER_INFO_PREFERENCES: '/user/info/preferences',
};
export default class UserInfoService {
  private apiClient: ApiClient;

  constructor({ isPublic }: { isPublic: boolean }) {
    this.apiClient = new ApiClient({ isPublic });
  }

  async readUserInfo(): Promise<types.ReadUserInfoResponse> {
    const { data } = await this.apiClient.get<types.ReadUserInfoResponse>(URLS.READ_USER_INFO);
    return data;
  }

  async updateUserInfo(payload: types.UpdateUserInfoPayload): Promise<types.UpdateUserInfoResponse> {
    const res = await this.apiClient.put<types.UpdateUserInfoResponse>(URLS.UPDATE_USER_INFO, payload);
    return res.data;
  }

  async readUserInfoRoles(): Promise<types.ReadUserInfoRolesResponse> {
    const { data } = await this.apiClient.get<types.ReadUserInfoRolesResponse>(URLS.READ_USER_INFO_ROLES);
    return data;
  }

  async readUserInfoPrefrences(): Promise<types.ReadUserInfoPreferencesResponse> {
    const { data } = await this.apiClient.get<types.ReadUserInfoPreferencesResponse>(URLS.READ_USER_INFO_PREFERENCES);
    return data;
  }
}
