'use client';

import React, { useEffect, useRef } from 'react';
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
 * const buttonRef = useRef<HTMLButtonElement>(null);
 *
 * <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
 *   {selectedDate || '날짜 선택'}
 * </button>
 * <CalendarModal
 *   isOpen={isOpen}
 *   selectedDate={selectedDate}
 *   onSelect={setSelectedDate}
 *   onClose={() => setIsOpen(false)}
 *   buttonRef={buttonRef}
 * />
 * ```
 */
interface CalendarModalProps {
  /** 모달의 열림/닫힘 상태 */
  isOpen: boolean;
  /** 선택된 날짜 (YYYY-MM-DD 형식) */
  selectedDate?: string;
  /** 날짜 선택 시 호출되는 콜백 함수 */
  onSelect: (date: string) => void;
  /** 모달 닫기 콜백 함수 */
  onClose: () => void;
  /** 달력을 여는 버튼의 ref */
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

export default function CalendarModal({ isOpen, selectedDate, onSelect, onClose, buttonRef }: CalendarModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 버튼을 클릭한 경우는 무시
      if (buttonRef.current?.contains(event.target as Node)) {
        return;
      }

      // 모달 외부를 클릭한 경우에만 닫기
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  const handleDateSelect = (date: string) => {
    onSelect(date);
    onClose();
  };

  return (
    <ModalContent ref={modalRef}>
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
