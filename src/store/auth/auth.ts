import { create } from 'zustand';

// 액세스 토큰과 인증 상태를 전역에서 관리하는 스토어
interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null, // 초기값은 null로 설정
  isAuthenticated: false,
  setAccessToken: (token: string) => set({ accessToken: token, isAuthenticated: true }),
  logout: () => set({ accessToken: null, isAuthenticated: false }),
}));

export default useAuthStore;