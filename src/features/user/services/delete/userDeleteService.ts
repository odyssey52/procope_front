import ApiClient from '@/shared/api/apiClient';
import * as types from './userDeleteService.type';

const baseURL = process.env.NEXT_PUBLIC_USER_API_HOST;

const URLS = {
  USER: '/user',
};

const api = new ApiClient({ isPublic: false, baseURL });

export async function deleteUser(payload: types.DeleteUserPayload) {
  const { data } = await api.delete(URLS.USER, {
    data: payload,
    withCredentials: true,
  });
  return data;
}
