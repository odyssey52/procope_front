import { AxiosError } from 'axios';

export type ApiError = {
  status: number;
  code: string;
  message: string;
};

export type ErrorType =
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'SERVER_ERROR'
  | 'NETWORK_ERROR'
  | 'UNKNOWN_ERROR';

export interface ErrorHandlerConfig {
  showToast: (message: string) => void;
  logout: () => Promise<void>;
  redirect: (path: string) => void;
  logError: (error: unknown) => void;
}

export const determineErrorType = (error: AxiosError): ErrorType => {
  if (!error.response) {
    return 'NETWORK_ERROR';
  }

  const { status } = error.response;
  switch (status) {
    case 400:
      return 'BAD_REQUEST';
    case 401:
      return 'UNAUTHORIZED';
    case 403:
      return 'FORBIDDEN';
    case 404:
      return 'NOT_FOUND';
    case 409:
      return 'CONFLICT';
    case 500:
      return 'SERVER_ERROR';
    default:
      return 'UNKNOWN_ERROR';
  }
};
