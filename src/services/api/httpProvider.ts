import axios from 'axios';

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_HOST;
const TIMEOUT = 10 * 1000;

const PRIVATE_HEADER = {
  Authorization: process.env.NEXT_PUBLIC_DEV_API_TOKEN,
  'Content-Type': 'application/json',
};
const PUBLIC_HEADER = {
  'Content-Type': 'application/json',
};

export default class HTTPProvider {
  private client: AxiosInstance;

  constructor({ isPublic, baseURL }: { isPublic: boolean; baseURL?: string }) {
    this.client = axios.create({
      baseURL: baseURL || BASE_URL,
      timeout: TIMEOUT,
      headers: isPublic ? PUBLIC_HEADER : PRIVATE_HEADER,
      responseType: 'json' as const,
    });
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
