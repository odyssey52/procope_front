import ApiClient from '@/services/api/apiClient';
import * as types from './socialAuthService.type';

const URLS = { CREATE_TOKEN_WITH_NAVER: '/callback' };

export default class SocialAuthService {
  private apiClient: ApiClient;

  constructor({ isPublic }: { isPublic: boolean }) {
    this.apiClient = new ApiClient({ isPublic });
  }

  async createTokenWithNaver(payload: types.CreateTokenWithNaverPayload): Promise<types.CreateTokenWithNaverResponse> {
    const { data } = await this.apiClient.post<types.CreateTokenWithNaverResponse>(
      URLS.CREATE_TOKEN_WITH_NAVER,
      payload,
    );
    return data;
  }
}
