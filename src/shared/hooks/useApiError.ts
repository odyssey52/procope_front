import { MESSAGES } from '@/shared/constants/messages';
import { toastActions } from '@/shared/store/modal/toast';
import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { ErrorCode, ERROR_MESSAGES } from '@/shared/types/error';

const useApiError = () => {
  const handleError = useCallback(async (error: unknown) => {
    if (error instanceof AxiosError) {
      const errorCode = error.response?.data?.code;
      const errorMessage = error.response?.data?.message;

      if (errorCode === ErrorCode.TOKEN_EXPIRED) return;

      if (errorCode && ERROR_MESSAGES[errorCode as ErrorCode]) {
        const message = ERROR_MESSAGES[errorCode as ErrorCode];
        toastActions.open({
          title: message.title,
          description: message.description,
          state: message.status === 'danger' ? 'error' : message.status,
        });
        return;
      }

      // 서버 에러
      if (error.response?.status && error.response.status >= 500) {
        toastActions.open({
          title: MESSAGES.ERROR.SERVER_ERROR,
          description: MESSAGES.ERROR.RETRY,
          state: 'error',
        });
        return;
      }

      // 기타 에러
      toastActions.open({
        title: errorMessage || MESSAGES.ERROR.UNKNOWN_ERROR,
        state: 'error',
      });
    } else {
      toastActions.open({ title: MESSAGES.ERROR.UNKNOWN_ERROR, state: 'error' });
    }
  }, []);

  return { handleError };
};

export default useApiError;
