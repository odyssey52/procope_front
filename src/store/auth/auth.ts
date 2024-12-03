import axios from 'axios';
import { useRouter } from 'next/navigation';
import { create } from 'zustand';

// 액세스 토큰과 인증 상태를 전역에서 관리하는 스토어
interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  isNewUser: boolean;
  setIsNewUser: (isNewUser: boolean) => void;
  setAccessToken: (token: string) => void;
  logout: () => void;
  // setRefreshAccessToken: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null, // 초기값은 null로 설정
  isAuthenticated: false,
  isNewUser: false,
  setIsNewUser: (isNewUser: boolean) => set({ isNewUser }),
  setAccessToken: (token: string) => set({ accessToken: token, isAuthenticated: true }),
  logout: () => {
    set({ accessToken: null, isAuthenticated: false });
    localStorage.removeItem('refreshToken');
  },
  // setRefreshAccessToken: async () => {
  //   try {
  //     const response = await axios.get('/auth/refresh', { withCredentials: true });
  //     const newAccessToken = response.data.accessToken;
  //     set({ accessToken: newAccessToken, isAuthenticated: true });
  //   } catch (error) {
  //     set({ accessToken: null, isAuthenticated: false });
  //     alert('세션이 만료되었습니다. 다시 로그인해주세요.');
  //     const router = useRouter();
  //     router.push('/login');
  //   }
  // },
}));

export default useAuthStore;
