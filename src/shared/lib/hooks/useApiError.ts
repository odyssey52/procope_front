import { useCallback } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { ERROR_MESSAGES } from '@/shared/constants/errorMessages';
import { ErrorHandlerConfig, ErrorType, determineErrorType } from '@/shared/types/error';

interface AxiosErrorResponse {
  message?: string;
  [key: string]: unknown;
}

interface AxiosErrorWithResponse extends AxiosError {
  response?: AxiosResponse<AxiosErrorResponse>;
}

const createDefaultConfig = (): ErrorHandlerConfig => {
  const router = useRouter();
  const { logout } = useAuthStore();

  return {
    showToast: (message: string) => {
      toastActions.open({ title: message, state: 'error' });
    },
    logout: async () => {
      logout(); // httpProvider에서 이미 토큰 무효화와 리다이렉트를 처리하므로 단순히 로그아웃만 실행
    },
    redirect: (path: string) => {
      router.push(path);
    },
    logError: (error: unknown) => {
      console.error('API 에러 발생:', error);
    },
  };
};

const handleErrorByType = async (errorType: ErrorType, error: AxiosErrorWithResponse, config: ErrorHandlerConfig) => {
  const { showToast, logout, logError } = config;
  const errorMessage = error.response?.data?.message;

  switch (errorType) {
    case 'BAD_REQUEST':
      showToast(errorMessage || ERROR_MESSAGES.BAD_REQUEST);
      break;
    case 'UNAUTHORIZED':
      showToast(ERROR_MESSAGES.UNAUTHORIZED);
      await logout();
      break;
    case 'FORBIDDEN':
      showToast(ERROR_MESSAGES.FORBIDDEN);
      break;
    case 'NOT_FOUND':
      showToast(ERROR_MESSAGES.NOT_FOUND);
      break;
    case 'CONFLICT':
      showToast(ERROR_MESSAGES.CONFLICT);
      break;
    case 'SERVER_ERROR':
      showToast(ERROR_MESSAGES.SERVER_ERROR);
      break;
    case 'NETWORK_ERROR':
      showToast(ERROR_MESSAGES.NETWORK_ERROR);
      break;
    default:
      showToast(ERROR_MESSAGES.UNKNOWN_ERROR);
  }

  logError(error);
};

const useApiError = (config?: Partial<ErrorHandlerConfig>) => {
  const defaultConfig = createDefaultConfig();
  const finalConfig = { ...defaultConfig, ...config };

  const handleError = useCallback(
    async (error: unknown) => {
      if (error instanceof AxiosError) {
        const errorType = determineErrorType(error);
        await handleErrorByType(errorType, error as AxiosErrorWithResponse, finalConfig);
      } else {
        finalConfig.showToast(ERROR_MESSAGES.UNKNOWN_ERROR);
        finalConfig.logError(error);
      }
    },
    [finalConfig],
  );

  return { handleError };
};

export default useApiError;
