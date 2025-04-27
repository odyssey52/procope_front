'use client';

import { useCalendarModalStore } from '@/shared/lib/store/modal/calendarModal';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

export default function CalendarModal() {
  const { isOpen, selectedDate, onSelect, close } = useCalendarModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent ref={modalRef}>
        <Calendar selectedDate={selectedDate} onChange={onSelect} />
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
`;
