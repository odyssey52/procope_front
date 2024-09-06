import { create } from 'zustand';

export type DefaultDialogState = {
  content: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

export const initialState: DefaultDialogState = {
  content: null,
  isOpen: false,
  onClose: undefined,
};

const open = (options: Omit<DefaultDialogState, 'isOpen'>) => {
  set({
    isOpen: true,
    content: options.content,
    onClose() {
      options.onClose?.();
      close();
    },
  });
};

const close = () => {
  set(initialState);
};

export const defaultDialogActions = {
  open,
  close,
};

const defaultDialogStore = {
  ...initialState,
  ...defaultDialogActions,
};

export const useDefaultDialogStore = create<DefaultDialogState>(() => defaultDialogStore);

const get = useDefaultDialogStore.getState;
const set = useDefaultDialogStore.setState;
