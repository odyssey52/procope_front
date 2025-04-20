import { create } from 'zustand';

// 액세스 토큰과 인증 상태를 전역에서 관리하는 스토어
interface UserStore {
  id: string | null;
  name: string | null;
  username: string | null;
  email: string | null;
  setUser: (user: User) => void;
}

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

const useUserStore = create<UserStore>((set) => ({
  id: null,
  name: null,
  username: null,
  email: null,
  setUser: (user) => set(user),
}));

export default useUserStore;
