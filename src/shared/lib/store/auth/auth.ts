import { create } from 'zustand';

// 액세스 토큰과 인증 상태를 전역에서 관리하는 스토어
interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  logoutType: 'manual' | 'auto' | null;
  setAccessToken: (token: string | null) => void;
  logout: (type?: 'manual' | 'auto') => void;
  // setRefreshAccessToken: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null, // 초기값은 null로 설정
  isAuthenticated: false,
  logoutType: null,
  setAccessToken: (token) => set({ accessToken: token, isAuthenticated: !!token }),
  logout: (type = 'manual') => set({ accessToken: null, isAuthenticated: false, logoutType: type }),
}));

export default useAuthStore;
