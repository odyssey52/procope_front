import ApiClient from '@/services/api/apiClient';
import * as types from './refreshTokenService.type';

const baseURL = process.env.NEXT_PUBLIC_USER_API_HOST;
// const baseURL = '/api';

// refreshtoken 을 통한 accessToken 재발급
const URLS = {
  REFRESH_ACCESS_TOKEN: '/auth/refresh',
  INVALIDATE_REFRESH_TOKEN: '/auth/invalidate',
};

export default class RefreshTokenService {
  private apiClient: ApiClient;

  constructor({ isPublic }: { isPublic: boolean }) {
    this.apiClient = new ApiClient({ isPublic, baseURL });
  }

  async readAccessTokenWithRefreshToken(): Promise<types.ReadAccessTokenWithRefreshTokenResponse> {
    const { data } = await this.apiClient.get<types.ReadAccessTokenWithRefreshTokenResponse>(
      URLS.REFRESH_ACCESS_TOKEN,
      { withCredentials: true },
    );
    return data;
  }

  async createAccessTokenWithRefreshToken(
    payload: types.createAccessTokenWithRefreshTokenPayload,
  ): Promise<types.CreateAccessTokenWithRefreshTokenResponse> {
    const { data } = await this.apiClient.post<types.CreateAccessTokenWithRefreshTokenResponse>(
      URLS.REFRESH_ACCESS_TOKEN,
      payload,
    );
    return data;
  }

  async invalidateRefreshToken() {
    const { data } = await this.apiClient.get(URLS.INVALIDATE_REFRESH_TOKEN, { withCredentials: true });
    return data;
  }
}
