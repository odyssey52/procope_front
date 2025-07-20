import { MESSAGES } from '@/shared/constants/messages';
import { toastActions } from '@/shared/lib/store/modal/toast';
import { handleLogout } from '@/shared/lib/utils/auth';
import { AxiosError } from 'axios';
import { useCallback } from 'react';

const useApiError = () => {
  const handleError = useCallback(async (error: unknown) => {
    if (error instanceof AxiosError) {
      const errorCode = error.response?.data?.code;
      const errorMessage = error.response?.data?.message;

      // 토큰 만료는 HTTPProvider에서 처리하므로 무시
      if (errorCode === 'AUTH002') return;

      // 인증 실패
      if (errorCode === 'AUTH001' || error.response?.status === 401) {
        await handleLogout({ savePreviousPath: true });
        return;
      }

      // 권한 없음
      if (errorCode === 'FORBIDDEN' || error.response?.status === 403) {
        toastActions.open({ title: MESSAGES.ERROR.FORBIDDEN, state: 'error' });
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

    console.error('API 에러 발생:', error);
  }, []);

  return { handleError };
};

export default useApiError;
