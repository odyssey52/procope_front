import React from 'react';
import { create } from 'zustand';

// 개별 사이드 패널 아이템 타입
export type SidePanelItem = {
  id: string;
  content: React.ReactNode;
  cardId?: string | null;
  onClose?: () => void;
  skipEnterAnimation?: boolean;
};

// 새 패널을 열 때 사용하는 페이로드
export type SidePanelPayload = {
  content: React.ReactNode;
  cardId?: string | null;
  onClose?: () => void;
};

// 스택 형태의 사이드 패널 상태
export type SidePanelState = {
  panels: SidePanelItem[];
  skipEnterAnimation: boolean;

  open: (options: SidePanelPayload) => void;
  close: () => void;
  closeAll: () => void;
  handleSwitchCard: (options: SidePanelPayload) => void;
  setSkipEnterAnimation: (value: boolean) => void;
};

export const initialState: SidePanelState = {
  panels: [],
  skipEnterAnimation: false,

  open: () => {},
  close: () => {},
  closeAll: () => {},
  handleSwitchCard: () => {},
  setSkipEnterAnimation: () => {},
};

const sidePanelStore = create<SidePanelState>((set, get) => ({
  ...initialState,

  open: (options) => {
    const { panels } = get();
    const newPanel: SidePanelItem = {
      id: `panel-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: options.content,
      cardId: options.cardId ?? null,
      onClose: options.onClose,
      skipEnterAnimation: false,
    };

    set({
      panels: [...panels, newPanel],
      skipEnterAnimation: false,
    });
  },

  close: () => {
    const { panels } = get();
    if (panels.length === 0) return;

    const lastPanel = panels[panels.length - 1];
    lastPanel.onClose?.();

    set({
      panels: panels.slice(0, -1),
      skipEnterAnimation: false,
    });
  },

  closeAll: () => {
    const { panels } = get();

    // 모든 패널의 onClose 콜백 실행
    panels.forEach((panel) => panel.onClose?.());

    set({
      panels: [],
      skipEnterAnimation: false,
    });
  },

  setSkipEnterAnimation: (value) => set({ skipEnterAnimation: value }),

  handleSwitchCard: (options) => {
    const { panels } = get();

    // 모든 패널의 onClose 콜백 실행
    panels.forEach((panel) => panel.onClose?.());

    const newPanel: SidePanelItem = {
      id: `panel-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: options.content,
      cardId: options.cardId ?? null,
      onClose: options.onClose,
      skipEnterAnimation: true, // 애니메이션 스킵
    };

    set({
      panels: [newPanel], // 기존 패널들을 모두 제거하고 새 패널만 추가
      skipEnterAnimation: true,
    });

    // 다음 프레임에서 애니메이션 스킵 플래그 리셋
    requestAnimationFrame(() => {
      requestAnimationFrame(() => set({ skipEnterAnimation: false }));
    });
  },
}));

export const useSidePanelStore = sidePanelStore;

const get = useSidePanelStore.getState;
const set = useSidePanelStore.setState;
export const sidePanelActions = {
  open: get().open,
  close: get().close,
  closeAll: get().closeAll,
  handleSwitchCard: get().handleSwitchCard,
  setSkipEnterAnimation: get().setSkipEnterAnimation,
};
