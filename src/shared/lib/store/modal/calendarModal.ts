import { create } from 'zustand';

export type CalendarModalState = {
  isOpen: boolean;
  selectedDate?: string;
  onSelect?: (date: string) => void;
  close: () => void;
};

const initialState: CalendarModalState = {
  isOpen: false,
  selectedDate: undefined,
  onSelect: undefined,
  close: () => {
    set(initialState);
  },
};

const open = (options: Omit<CalendarModalState, 'isOpen' | 'close'>) => {
  set({
    isOpen: true,
    selectedDate: options.selectedDate,
    onSelect: options.onSelect,
    close: () => {
      set(initialState);
    },
  });
};

export const calendarModalActions = {
  open,
};

const calendarModalStore = {
  ...initialState,
  ...calendarModalActions,
};

export const useCalendarModalStore = create<CalendarModalState>(() => calendarModalStore);

const get = useCalendarModalStore.getState;
const set = useCalendarModalStore.setState;
