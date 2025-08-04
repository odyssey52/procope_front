'use client';

import { IconCalendar } from '@/shared/assets/icons/line';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import TextButton from '@/shared/ui/button/TextButton';
import Calendar from '@/shared/ui/calendar/Calendar';
import { useState } from 'react';
import styled from 'styled-components';

const CalendarArea = ({ selectedDate, onChange }: { selectedDate: string; onChange: (date: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleCalendarOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCalendarDateChange = (date: string) => {
    setIsOpen(false);
    onChange(date);
  };

  return (
    <Wrapper ref={ref}>
      <TextButton $type="24" rightIcon={<IconCalendar />} onClick={handleCalendarOpen}>
        {selectedDate}
      </TextButton>
      {isOpen && <Calendar selectedDate={selectedDate} onChange={handleCalendarDateChange} format="YYYY.MM.DD" />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

CalendarArea.displayName = 'CalendarArea';

export default CalendarArea;
