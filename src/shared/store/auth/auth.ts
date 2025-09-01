import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  logoutType: 'manual' | 'auto' | null;
  isRefreshing: boolean;
  isRefreshTokenExpired: boolean;
  setAccessToken: (token: string | null) => void;
  resetAccessToken: (type?: 'manual' | 'auto') => void;
  setRefreshing: (isRefreshing: boolean) => void;
  setIsRefreshTokenExpired: (isRefreshTokenExpired: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  logoutType: null,
  isRefreshing: false,
  isRefreshTokenExpired: false,
  setAccessToken: (token) => set({ accessToken: token }),
  resetAccessToken: (type = 'manual') => set({ accessToken: null, logoutType: type }),
  setRefreshing: (isRefreshing) => set({ isRefreshing }),
  setIsRefreshTokenExpired: (isRefreshTokenExpired) => set({ isRefreshTokenExpired }),
}));

export default useAuthStore;
