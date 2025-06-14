import ApiClient from '@/shared/api/apiClient';
import * as types from './userDeleteService.type';

const baseURL = process.env.NEXT_PUBLIC_USER_API_HOST;

const URLS = {
  USER: (id: string) => `/user/${id}`,
};

const api = new ApiClient({ isPublic: false, baseURL });

export async function deleteUser(params: types.DeleteUserParams) {
  const { data } = await api.delete(URLS.USER(params.id), { withCredentials: true });
  return data;
}
