import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  logoutType: 'manual' | 'auto' | null;
  setAccessToken: (token: string | null) => void;
  resetAccessToken: (type?: 'manual' | 'auto') => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  logoutType: null,
  setAccessToken: (token) => set({ accessToken: token }),
  resetAccessToken: (type = 'manual') => set({ accessToken: null, logoutType: type }),
}));

export default useAuthStore;
