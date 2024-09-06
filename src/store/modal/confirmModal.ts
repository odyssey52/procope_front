import { create } from 'zustand';

export type ConfirmModalState = {
  isOpen: boolean;
  title: string | React.ReactNode;
  icon?: React.ReactNode;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const initialState: ConfirmModalState = {
  isOpen: false,
  title: '',
  description: '',
  confirmLabel: '',
  cancelLabel: '',
  onConfirm: undefined,
  onCancel: undefined,
};

const open = (options: Omit<ConfirmModalState, 'isOpen'>) => {
  return new Promise<boolean>((resolve) => {
    set({
      isOpen: true,
      icon: options.icon,
      title: options.title,
      description: options.description,
      confirmLabel: options.confirmLabel || '확인',
      cancelLabel: options.cancelLabel || '취소',
      onConfirm() {
        options.onConfirm?.();
        resolve(true);
        close();
      },
      onCancel() {
        options.onCancel?.();
        resolve(false);
        close();
      },
    });
  });
};

const close = () => {
  set(initialState);
};

export const confirmModalActions = {
  open,
  close,
};

const confirmModalStore = {
  ...initialState,
  ...confirmModalActions,
};

export const useConfirmModalStore = create<ConfirmModalState>(() => confirmModalStore);

const get = useConfirmModalStore.getState;
const set = useConfirmModalStore.setState;
