'use client';

import { IconDirectionLeft, IconDirectionRight } from '@/shared/assets/icons/line';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { elevation, zIndex } from '@/shared/styles/mixin';
import { theme } from '@/shared/styles/theme';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import CalendarItem from './CalendarItem';

const days = ['일', '월', '화', '수', '목', '금', '토'];

interface CalendarProps {
  selectedDate?: string; // YYYY-MM-DD 형식
  onChange?: (date: string) => void;
  onClose: () => void;
  format?: 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY.MM.DD' | 'YYYY.MM.DD HH:mm:ss';
}

interface SelectedDateInfo {
  month: number;
  date: number;
}

export default function Calendar({ selectedDate, onChange, onClose, format = 'YYYY-MM-DD' }: CalendarProps) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selected, setSelected] = useState<SelectedDateInfo | null>(null);

  const firstDayOfMonth = currentDate.startOf('month').day();
  const lastDateOfMonth = currentDate.endOf('month').date();
  const lastDateOfPrevMonth = currentDate.subtract(1, 'month').endOf('month').date();

  const dates = Array.from({ length: 35 }, (_, i) => {
    if (i < firstDayOfMonth) {
      return {
        date: lastDateOfPrevMonth - (firstDayOfMonth - i - 1),
        type: 'prev' as const,
        month: currentDate.month() - 1,
      };
    }

    if (i >= firstDayOfMonth && i < firstDayOfMonth + lastDateOfMonth) {
      return {
        date: i - firstDayOfMonth + 1,
        type: 'current' as const,
        month: currentDate.month(),
      };
    }

    return {
      date: i - (firstDayOfMonth + lastDateOfMonth) + 1,
      type: 'next' as const,
      month: currentDate.month() + 1,
    };
  });

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
    setSelected(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
    setSelected(null);
  };

  const handleDateSelect = (date: number, month: number) => {
    const newSelectedDate = {
      month,
      date,
    };
    setSelected(newSelectedDate);

    if (onChange) {
      let selectedDate = currentDate;

      if (month < currentDate.month()) {
        selectedDate = currentDate.subtract(1, 'month');
      } else if (month > currentDate.month()) {
        selectedDate = currentDate.add(1, 'month');
      }

      const selectedFullDate = selectedDate.date(date).format(format);
      onChange(selectedFullDate);
    }
  };
  useEffect(() => {
    if (selectedDate) {
      const date = dayjs(selectedDate);
      setCurrentDate(date);
      setSelected({
        month: date.month(),
        date: date.date(),
      });
    }
  }, [selectedDate]);
  return (
    <Wrapper ref={ref}>
      <Header>
        <NavButton onClick={handlePrevMonth}>
          <IconDirectionLeft size={24} color={theme.sementicColors.icon.primary} />
        </NavButton>
        <Text variant="body_16_semibold" color="primary">
          {currentDate.format('YYYY년 M월')}
        </Text>
        <NavButton onClick={handleNextMonth}>
          <IconDirectionRight size={24} color={theme.sementicColors.icon.primary} />
        </NavButton>
      </Header>
      <Days>
        {days.map((d) => (
          <DayLabel key={`calendar-day-${d}`}>
            <Text variant="caption_12_regular" color="primary">
              {d}
            </Text>
          </DayLabel>
        ))}
      </Days>
      <Grid>
        {dates.map((item, i) => {
          const isSelected = selected?.month === item.month && selected?.date === item.date;
          const isDisabled = item.type !== 'current';

          return (
            <CalendarItem
              key={`calendar-item-${i}`}
              disabled={isDisabled}
              selected={isSelected}
              label={item.date.toString()}
              onClick={() => !isDisabled && handleDateSelect(item.date, item.month)}
            />
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;
  padding: 12px 0;
  gap: 4px;
  border-radius: 12px;
  background: ${theme.sementicColors.bg.inverse};
  ${zIndex.layer3};
  ${elevation.shadow4};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  font-weight: bold;
`;

export const Title = styled.span`
  flex: 1;
  text-align: center;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  padding: 10px 16px;
  place-items: center;
`;

export const DayLabel = styled.div`
  text-align: center;
  width: 36px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  row-gap: 8px;
  padding: 0 16px;
  place-items: center;
`;
