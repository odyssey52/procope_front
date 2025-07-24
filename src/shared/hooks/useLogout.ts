'use client';

import { MESSAGES } from '@/shared/constants/messages';
import useAuthStore from '@/shared/store/auth/auth';
import { toastActions } from '@/shared/store/modal/toast';
import { useRouter } from 'next/navigation';

interface LogoutOptions {
  savePreviousPath?: boolean;
  redirectPath?: string;
}
// client component에서 사용하는 경우 사용
export const useLogout = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  const clientAutoLogout = async (options: LogoutOptions) => {
    const { savePreviousPath = false, redirectPath = '/login' } = options;
    try {
      if (savePreviousPath && typeof window !== 'undefined') {
        localStorage.setItem('previousPath', window.location.pathname);
      }

      if (typeof window !== 'undefined') {
        router.replace(redirectPath);
        logout();
      }
    } catch (error) {
      toastActions.open({ title: MESSAGES.ERROR.LOGOUT_FAILED, description: MESSAGES.ERROR.RETRY, state: 'error' });
    }
  };

  return { clientAutoLogout };
};
