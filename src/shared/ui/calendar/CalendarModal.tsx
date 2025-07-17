'use client';

import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import styled from 'styled-components';
import Calendar from './Calendar';

/**
 * CalendarModal 컴포넌트
 *
 * @description
 * - 버튼 아래에 위치하는 달력 모달 컴포넌트
 * - 버튼 클릭 시 토글 기능으로 열리고 닫힘
 * - 외부 클릭 시 닫힘 (버튼 클릭은 무시)
 * - 날짜 선택 시 자동으로 닫힘
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 * const [selectedDate, setSelectedDate] = useState('');
 *
 * <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
 *   {selectedDate || '날짜 선택'}
 * </button>
 * <CalendarModal
 *   isOpen={isOpen}
 *   selectedDate={selectedDate}
 *   onSelect={setSelectedDate}
 *   onClose={() => setIsOpen(false)}
 * />
 * ```
 */
interface CalendarModalProps {
  isOpen: boolean;
  selectedDate?: string;
  onSelect: (date: string) => void;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, selectedDate, onSelect, onClose }: CalendarModalProps) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  const handleDateSelect = (date: string) => {
    onSelect(date);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <ModalContent ref={ref}>
      <Calendar selectedDate={selectedDate} onChange={handleDateSelect} />
    </ModalContent>
  );
}

const ModalContent = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 1000;
`;
