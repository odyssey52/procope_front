/* eslint-disable no-param-reassign */
import useAuthStore from '@/store/auth/auth';
import axios from 'axios';

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_HOST;
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
      const { accessToken } = useAuthStore.getState(); // Zustand에서 액세스토큰 가져오기
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
    this.client.interceptors.response.use(
      (response) => response, // 성공 응답은 그대로 반환
      async (error) => {
        if (error.response?.status === 401) {
          try {
            const refreshResponse = await axios.get(`${BASE_URL}/auth/refresh`, { withCredentials: true });
            const newAccessToken = refreshResponse.data.accessToken;

            useAuthStore.getState().setAccessToken(newAccessToken);

            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return this.client.request(error.config);
          } catch (refreshError) {
            if (axios.isAxiosError(refreshError)) {
              if (refreshError.response?.status === 401) {
                console.error('리프레시 토큰이 없거나 만료되었습니다.');

                if (typeof window !== 'undefined') {
                  alert('세션이 만료되었습니다. 다시 로그인해주세요.');
                  useAuthStore.getState().logout();
                }
              }
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
