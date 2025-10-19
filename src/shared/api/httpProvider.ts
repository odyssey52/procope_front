/* eslint-disable no-param-reassign */
import LOGOUT_TYPE from '@/features/login/constants/logout';
import { MESSAGES } from '@/shared/constants/messages';
import useAuthStore from '@/shared/store/auth/auth';
import { toastActions } from '@/shared/store/modal/toast';

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
        // 토큰이 없거나 토큰 만료 코드
        if (error.response?.data?.code === 'AUTH009' || error.response?.data?.code === 'AUTH002') {
          const originalConfig = error.config as AxiosRequestConfig & { _retry?: boolean };
          // 재시도 요청에서도 동일 에러가 나면 무한 루프 방지를 위해 중단
          if (originalConfig && originalConfig._retry) {
            return Promise.reject(error);
          }
          const authStore = useAuthStore.getState();

          // 이미 토큰 갱신 중이면 대기
          if (authStore.isRefreshing) {
            // 토큰 갱신이 완료될 때까지 대기
            return new Promise((resolve, reject) => {
              const checkRefreshing = () => {
                const currentState = useAuthStore.getState();
                if (!currentState.isRefreshing) {
                  // 토큰 갱신 완료, 새로운 토큰으로 재요청
                  const newConfig: any = { ...error.config };
                  newConfig.headers.Authorization = `Bearer ${currentState.accessToken}`;
                  newConfig._retry = true;
                  resolve(this.client.request(newConfig));
                } else {
                  // 아직 갱신 중, 100ms 후 다시 확인
                  setTimeout(checkRefreshing, 100);
                }
              };
              checkRefreshing();
            });
          }

          // 토큰 갱신 시작
          authStore.setRefreshing(true);

          try {
            const refreshResponse = await axios.get(`${USER_URL}auth/refresh`, { withCredentials: true });
            const newAccessToken = refreshResponse.data;
            if (newAccessToken === 'JsonWebTokenError') {
              authStore.setIsRefreshTokenExpired(true);
              await axios.get(`${USER_URL}auth/invalidate`, { withCredentials: true });
              if (window !== undefined) {
                window.location.href = `/login?logoutType=${LOGOUT_TYPE.REFRESH_TOKEN_EXPIRED}`;
              }
            }
            authStore.setAccessToken(newAccessToken);

            const newConfig: any = { ...error.config };
            newConfig.headers.Authorization = `Bearer ${newAccessToken}`;
            newConfig._retry = true;
            return this.client.request(newConfig);
            // 에러 시 응답
            // {
            //   "message": "Refresh token not found in cookies",
            //   "error": "Unauthorized",
            //   "statusCode": 401
            // }
          } catch (refreshError) {
            if (axios.isAxiosError(refreshError)) {
              if (refreshError.response?.data.statusCode === 401) {
                authStore.setIsRefreshTokenExpired(true);
                await axios.get(`${USER_URL}auth/invalidate`, { withCredentials: true });
                if (window !== undefined) {
                  window.location.href = `/login?logoutType=${LOGOUT_TYPE.REFRESH_TOKEN_EXPIRED}`;
                }
              }
            }
          } finally {
            authStore.setRefreshing(false);
          }
        }
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
