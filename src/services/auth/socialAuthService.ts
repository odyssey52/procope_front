import ApiClient from '@/services/api/apiClient';
import * as types from './socialAuthService.type';

const baseURL = process.env.NEXT_PUBLIC_DEV_USER_API_HOST;
const URLS = {
  CREATE_TOKEN_WITH_SOCIAL: '/auth/callback',
};

export default class SocialAuthService {
  private apiClient: ApiClient;

  constructor({ isPublic }: { isPublic: boolean }) {
    this.apiClient = new ApiClient({ isPublic, baseURL });
  }

  async createTokenWithNaver(payload: types.CreateTokenWithNaverPayload): Promise<types.CreateTokenWithNaverResponse> {
    const { data } = await this.apiClient.post<types.CreateTokenWithNaverResponse>(
      URLS.CREATE_TOKEN_WITH_SOCIAL,
      payload,
    );
    return data;
  }

  async createTokenWithGoogle(payload: types.CreateTokenWithGooglePayload): Promise<types.CreateTokenWithGoogleResponse> {
    const {data} = await this.apiClient.post<types.CreateTokenWithGoogleResponse>(
      URLS.CREATE_TOKEN_WITH_SOCIAL,
      payload,
    );
    return data;
  }
}
