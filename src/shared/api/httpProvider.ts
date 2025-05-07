/* eslint-disable no-param-reassign */
import { MESSAGES } from '@/shared/constants/messages';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { handleLogout } from '@/shared/lib/utils/auth';
import axios from 'axios';

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_HOST;
const USER_URL = process.env.NEXT_PUBLIC_USER_API_HOST;
const TIMEOUT = 10 * 10000;

const PUBLIC_HEADER = {
  'Content-Type': 'application/json',
};

export default class HTTPProvider {
  private client: AxiosInstance;

  constructor({ isPublic, baseURL }: { isPublic: boolean; baseURL?: string }) {
    this.client = axios.create({
      baseURL: baseURL || BASE_URL,
      timeout: TIMEOUT,
      headers: PUBLIC_HEADER,
      responseType: 'json' as const,
    });

    if (!isPublic) {
      this.setAccessTokenInterceptor();
    }
  }

  private setAccessTokenInterceptor() {
    this.client.interceptors.request.use((config) => {
      const { accessToken } = useAuthStore.getState();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 403) {
          try {
            const refreshResponse = await axios.get(`${USER_URL}auth/refresh`, { withCredentials: true });
            const newAccessToken = refreshResponse.data;

            useAuthStore.getState().setAccessToken(newAccessToken);
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return this.client.request(error.config);
          } catch (refreshError) {
            if (axios.isAxiosError(refreshError)) {
              toastActions.open({
                title: MESSAGES.ERROR.UNAUTHORIZED,
                description: MESSAGES.ERROR.UNAUTHORIZED_DESCRIPTION,
                state: 'error',
              });
              await handleLogout({ savePreviousPath: true });
            } else {
              console.error('예상치 못한 에러 발생:', refreshError);
            }
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(path, config);
  }

  post<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(path, body, config);
  }

  postFormData<T>(path: string, formData: FormData): Promise<AxiosResponse<T>> {
    return this.client.postForm<T>(path, formData);
  }

  put<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(path, body, config);
  }

  patch<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.patch<T>(path, body, config);
  }

  delete<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(path, config);
  }
}
