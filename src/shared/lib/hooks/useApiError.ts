import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { invalidateRefreshToken } from '@/features/auth/services/refresh/refreshTokenService';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { toastActions } from '@/shared/lib/store/modal/toast';

interface ErrorResponse {
  message: string;
  code?: string;
}

type StatusHandlers = {
  [key: number]: (message?: string) => Promise<void> | void;
  default: (message?: string) => void;
};

const useApiError = () => {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await invalidateRefreshToken();
      logout();
      router.push('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const statusHandlers: StatusHandlers = {
    400: (message) => toastActions.open({ title: message || '잘못된 요청입니다.', state: 'error' }),
    401: async () => {
      toastActions.open({ title: '로그인 세션이 만료되었습니다. 다시 로그인해주세요.', state: 'error' });
      await handleLogout();
    },
    403: () => toastActions.open({ title: '해당 기능에 대한 권한이 없습니다.', state: 'error' }),
    404: () => toastActions.open({ title: '요청한 리소스를 찾을 수 없습니다.', state: 'error' }),
    409: () => toastActions.open({ title: '이미 존재하는 데이터입니다.', state: 'error' }),
    500: () => toastActions.open({ title: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', state: 'error' }),
    default: (message) => toastActions.open({ title: message || '알 수 없는 오류가 발생했습니다.', state: 'error' }),
  };

  const handleError = useCallback(async (error: unknown) => {
    if (error instanceof AxiosError) {
      if (error.response) {
        const httpStatus = error.response.status;
        const errorResponse = error.response.data as ErrorResponse;
        const httpMessage = errorResponse.message;

        const handler = statusHandlers[httpStatus] || statusHandlers.default;
        await handler(httpMessage);
      } else {
        toastActions.open({ title: '서버 연결이 원활하지 않습니다.', state: 'error' });
      }
    } else {
      toastActions.open({ title: '네트워크 연결 오류 또는 기타 오류가 발생했습니다.', state: 'error' });
    }
  }, []);

  return { handleError };
};

export default useApiError;
