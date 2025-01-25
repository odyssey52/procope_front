import { create } from 'zustand';

// 액세스 토큰과 인증 상태를 전역에서 관리하는 스토어
interface AuthStore {
  accessToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string) => void;
  logout: () => void;
  // setRefreshAccessToken: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null, // 초기값은 null로 설정
  isAuthenticated: false,
  setAccessToken: (token: string) => set({ accessToken: token, isAuthenticated: true }),
  logout: () => {
    set({ accessToken: null, isAuthenticated: false });
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  },
}));

export default useAuthStore;
