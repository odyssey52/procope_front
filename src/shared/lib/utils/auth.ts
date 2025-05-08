import { MESSAGES } from '@/shared/constants/messages';
import useAuthStore from '@/shared/lib/store/auth/auth';
import { toastActions } from '@/shared/lib/store/modal/toast';

interface LogoutOptions {
  savePreviousPath?: boolean;
  redirectPath?: string;
}

export const handleLogout = async (options: LogoutOptions = {}) => {
  const { savePreviousPath = false, redirectPath = '/login' } = options;

  try {
    // 이전 페이지 경로 저장 (인증 실패 등 강제 로그아웃 시에만)
    if (savePreviousPath && typeof window !== 'undefined') {
      localStorage.setItem('previousPath', window.location.pathname);
    }

    // 로그아웃 처리
    useAuthStore.getState().logout();

    // 리다이렉트
    if (typeof window !== 'undefined') {
      window.location.href = redirectPath;
    }
  } catch (error) {
    console.error('로그아웃 처리 중 에러 발생:', error);
    toastActions.open({ title: MESSAGES.ERROR.LOGOUT_FAILED, description: MESSAGES.ERROR.RETRY, state: 'error' });
  }
};
