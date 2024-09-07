import { create } from 'zustand';

export type ToastState = {
  isOpen: boolean;
  autoHideDuration: number;
  title: string;
  state: 'default' | 'success' | 'error' | 'warning' | 'info';
  description?: string;
};

const initialState: ToastState = {
  isOpen: false,
  autoHideDuration: 4000,
  state: 'default',
  title: '',
};
type ToastOpen = {
  title: string;
  autoHideDuration?: number;
  description?: string;
  state?: 'default' | 'success' | 'error' | 'warning' | 'info';
};

const open = ({ title, autoHideDuration, description, state }: ToastOpen) => {
  const status = get();
  if (autoHideDuration) {
    set({ ...status, isOpen: true, title, description, state: state ?? 'default', autoHideDuration });
  } else {
    set({ ...status, isOpen: true, title, description, state: state ?? 'default' });
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
