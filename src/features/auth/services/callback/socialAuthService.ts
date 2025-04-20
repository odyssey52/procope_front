import ApiClient from '@/shared/api/apiClient';
import * as types from './socialAuthService.type';

const baseURL = process.env.NEXT_PUBLIC_USER_API_HOST;

const URLS = {
  CREATE_TOKEN_WITH_SOCIAL: '/auth/callback',
};

const api = new ApiClient({ isPublic: false, baseURL });

export async function createTokenWithNaver(
  payload: types.CreateTokenWithNaverPayload,
): Promise<types.CreateTokenWithNaverResponse> {
  const { data } = await api.post<types.CreateTokenWithNaverResponse>(URLS.CREATE_TOKEN_WITH_SOCIAL, payload, {
    withCredentials: true,
  });
  return data;
}

export async function createTokenWithGoogle(
  payload: types.CreateTokenWithGooglePayload,
): Promise<types.CreateTokenWithGoogleResponse> {
  const { data } = await api.post<types.CreateTokenWithGoogleResponse>(URLS.CREATE_TOKEN_WITH_SOCIAL, payload, {
    withCredentials: true,
  });
  return data;
}
