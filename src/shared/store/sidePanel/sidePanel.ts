import React from 'react';
import { create } from 'zustand';

// 데이터만 분리
export type SidePanelPayload = {
  content: React.ReactNode | null;
  cardId?: string | null;
  onClose?: () => void;
};

// 액션 함수 타입 분리
export type SidePanelState = SidePanelPayload & {
  isOpen: boolean;
  skipEnterAnimation: boolean;

  open: (options: SidePanelPayload) => void;
  close: () => void;
  handleSwitchCard: (options: SidePanelPayload) => void;
  setSkipEnterAnimation: (value: boolean) => void;
};

export const initialState: SidePanelState = {
  content: null,
  isOpen: false,
  onClose: undefined,
  cardId: null,
  skipEnterAnimation: false,

  open: () => {},
  close: () => {},
  handleSwitchCard: () => {},
  setSkipEnterAnimation: () => {},
};

const sidePanelStore = create<SidePanelState>((set, get) => ({
  ...initialState,

  open: (options) =>
    set({
      isOpen: true,
      content: options.content,
      cardId: options.cardId ?? null,
      onClose() {
        options.onClose?.();
        get().close();
      },
      skipEnterAnimation: false,
    }),

  close: () =>
    set({
      isOpen: false,
      content: null,
      cardId: null,
      onClose: undefined,
      skipEnterAnimation: false,
    }),

  setSkipEnterAnimation: (value) => set({ skipEnterAnimation: value }),
  handleSwitchCard: (options) => {
    const { isOpen } = get();

    if (!isOpen) {
      set({
        isOpen: true,
        skipEnterAnimation: false,
        ...options,
        onClose() {
          options.onClose?.();
          get().close();
        },
      });
    } else {
      set({
        skipEnterAnimation: true, // 열림 애니메이션 스킵
        ...options,
        onClose() {
          options.onClose?.();
          get().close();
        },
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => set({ skipEnterAnimation: false }));
      });
    }
  },
}));

export const useSidePanelStore = sidePanelStore;

const get = useSidePanelStore.getState;
const set = useSidePanelStore.setState;
export const sidePanelActions = {
  open: get().open,
  close: get().close,
  handleSwitchCard: get().handleSwitchCard,
  setSkipEnterAnimation: get().setSkipEnterAnimation,
};
