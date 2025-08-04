import React from 'react';
import { create } from 'zustand';

export type SidePanelState = {
  content: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

export const initialState: SidePanelState = {
  content: null,
  isOpen: false,
  onClose: undefined,
};

const open = (options: Omit<SidePanelState, 'isOpen'>) => {
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

export const sidePanelActions = {
  open,
  close,
};

const sidePanelStore = {
  ...initialState,
  ...sidePanelActions,
};

export const useSidePanelStore = create<SidePanelState>(() => sidePanelStore);

const get = useSidePanelStore.getState;
const set = useSidePanelStore.setState;
