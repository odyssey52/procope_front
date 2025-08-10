import React from 'react';
import { create } from 'zustand';

// 데이터만 분리
export type SidePanelPayload = {
  content: React.ReactNode | null;
  moreMenu?: React.ReactNode | null;
  cardId?: string | null;
  onClose?: () => void;
};

// 액션 함수 타입 분리
export type SidePanelState = SidePanelPayload & {
  isOpen: boolean;
  skipExitAnimation: boolean;

  open: (options: SidePanelPayload) => void;
  close: () => void;
  handleSwitchCard: (options: SidePanelPayload) => void;
  setSkipExitAnimation: (value: boolean) => void;
};

export const initialState: SidePanelState = {
  content: null,
  moreMenu: null,
  isOpen: false,
  onClose: undefined,
  cardId: null,
  skipExitAnimation: false,

  open: () => {},
  close: () => {},
  handleSwitchCard: () => {},
  setSkipExitAnimation: () => {},
};

const sidePanelStore = create<SidePanelState>((set, get) => ({
  ...initialState,

  open: (options) =>
    set({
      isOpen: true,
      content: options.content,
      moreMenu: options.moreMenu ?? null,
      cardId: options.cardId ?? null,
      onClose() {
        options.onClose?.();
        get().close();
      },
      skipExitAnimation: false,
    }),

  close: () =>
    set({
      isOpen: false,
      content: null,
      moreMenu: null,
      cardId: null,
      onClose: undefined,
      skipExitAnimation: false,
    }),

  setSkipExitAnimation: (value) => set({ skipExitAnimation: value }),

  handleSwitchCard: (options) => {
    set({ skipExitAnimation: true, isOpen: false });

    setTimeout(() => {
      set({
        isOpen: true,
        content: options.content,
        moreMenu: options.moreMenu ?? null,
        cardId: options.cardId ?? null,
        onClose() {
          options.onClose?.();
          get().close();
        },
        skipExitAnimation: false,
      });
    }, 0);
  },
}));

export const useSidePanelStore = sidePanelStore;

const get = useSidePanelStore.getState;
const set = useSidePanelStore.setState;
export const sidePanelActions = {
  open: get().open,
  close: get().close,
  handleSwitchCard: get().handleSwitchCard,
  setSkipExitAnimation: get().setSkipExitAnimation,
};
