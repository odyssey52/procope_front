import { useCallback } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { MESSAGES } from '@/shared/constants/messages';
import { ErrorHandlerConfig, ErrorType, determineErrorType } from '@/shared/types/error';
import { handleLogout } from '@/shared/lib/utils/auth';

interface AxiosErrorResponse {
  message?: string;
  [key: string]: unknown;
}

interface AxiosErrorWithResponse extends AxiosError {
  response?: AxiosResponse<AxiosErrorResponse>;
}

const createDefaultConfig = (): ErrorHandlerConfig => {
  return {
    showToast: (message: string) => {
      toastActions.open({ title: message, state: 'error' });
    },
    logout: async () => {
      await handleLogout({ savePreviousPath: true });
    },
    redirect: (path: string) => {
      handleLogout({ redirectPath: path });
    },
    logError: (error: unknown) => {
      console.error('API 에러 발생:', error);
    },
  };
};

const handleErrorByType = async (errorType: ErrorType, error: AxiosErrorWithResponse, config: ErrorHandlerConfig) => {
  const { showToast, logout, logError } = config;
  const errorMessage = error.response?.data?.message;

  // 로그아웃 관련 에러인 경우
  if (error.config?.url?.includes('auth/logout') || error.config?.url?.includes('auth/refresh')) {
    showToast(MESSAGES.ERROR.LOGOUT_FAILED);
    logError(error);
    return;
  }

  if (errorType === 'UNAUTHORIZED') {
    await logout();
    return;
  }

  switch (errorType) {
    case 'BAD_REQUEST':
      showToast(errorMessage || MESSAGES.ERROR.BAD_REQUEST);
      break;
    case 'FORBIDDEN':
      showToast(MESSAGES.ERROR.FORBIDDEN);
      break;
    case 'NOT_FOUND':
      showToast(MESSAGES.ERROR.NOT_FOUND);
      break;
    case 'CONFLICT':
      showToast(MESSAGES.ERROR.CONFLICT);
      break;
    case 'SERVER_ERROR':
      showToast(MESSAGES.ERROR.SERVER_ERROR);
      break;
    case 'NETWORK_ERROR':
      showToast(MESSAGES.ERROR.NETWORK_ERROR);
      break;
    default:
      showToast(MESSAGES.ERROR.UNKNOWN_ERROR);
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
        finalConfig.showToast(MESSAGES.ERROR.UNKNOWN_ERROR);
        finalConfig.logError(error);
      }
    },
    [finalConfig],
  );

  return { handleError };
};

export default useApiError;
