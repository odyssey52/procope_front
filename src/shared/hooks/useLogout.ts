'use client';

import { MESSAGES } from '@/shared/constants/messages';
import useAuthStore from '@/shared/store/auth/auth';
import { toastActions } from '@/shared/store/modal/toast';
import { useRouter } from 'next/navigation';

interface LogoutOptions {
  savePreviousPath?: boolean; // 이전 경로 저장 여부
  redirectPath?: string; // 리다이렉트 경로
}

// client component에서 사용하는 경우 사용
export const useLogout = () => {
  const { resetAccessToken } = useAuthStore();
  const router = useRouter();

  const logout = async (options: LogoutOptions) => {
    const { savePreviousPath = false, redirectPath = '/login' } = options;
    try {
      if (savePreviousPath && typeof window !== 'undefined') {
        localStorage.setItem('previousPath', window.location.pathname);
        resetAccessToken();
      }

      if (typeof window !== 'undefined') {
        router.replace(redirectPath);
        resetAccessToken();
      }
    } catch (error) {
      toastActions.open({ title: MESSAGES.ERROR.LOGOUT_FAILED, description: MESSAGES.ERROR.RETRY, state: 'error' });
    }
  };

  return { logout };
};
