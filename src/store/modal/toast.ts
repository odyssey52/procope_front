import { create } from 'zustand';

export type ToastState = {
  isOpen: boolean;
  autoHideDuration: number;
  title: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  description?: string;
};

const initialState: ToastState = {
  isOpen: false,
  autoHideDuration: 50000,
  type: 'default',
  title: '',
};
type ToastOpen = {
  title: string;
  autoHideDuration?: number;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
};

const open = ({ title, autoHideDuration, description, type }: ToastOpen) => {
  const status = get();
  if (autoHideDuration) {
    set({ ...status, isOpen: true, title, description, type, autoHideDuration });
  } else {
    set({ ...status, isOpen: true, title });
  }
};

const close = () => {
  set(initialState);
};

export const toastActions = {
  open,
  close,
};

const toastStore = {
  ...initialState,
  ...toastActions,
};

export const useToastStore = create<ToastState>(() => toastStore);

const set = useToastStore.setState;
const get = useToastStore.getState;
