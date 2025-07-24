import { MESSAGES } from '@/shared/constants/messages';
import useAuthStore from '@/shared/store/auth/auth';
import { toastActions } from '@/shared/store/modal/toast';

interface LogoutOptions {
  savePreviousPath?: boolean;
  redirectPath?: string;
}
// server component에서 사용하는 경우 사용
export const handleLogout = async (options: LogoutOptions = {}) => {
  const { savePreviousPath = false, redirectPath = '/login' } = options;

  try {
    if (savePreviousPath && typeof window !== 'undefined') {
      localStorage.setItem('previousPath', window.location.pathname);
    }

    useAuthStore.getState().resetAccessToken();

    if (typeof window !== 'undefined') {
      window.location.href = redirectPath;
    }
  } catch (error) {
    toastActions.open({ title: MESSAGES.ERROR.LOGOUT_FAILED, description: MESSAGES.ERROR.RETRY, state: 'error' });
  }
};
