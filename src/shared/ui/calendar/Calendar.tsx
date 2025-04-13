'use client';

import { IconDirectionLeft, IconDirectionRight } from '@/assets/icons/line';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text';
import CalendarItem from './CalendarItem';

const days = ['일', '월', '화', '수', '목', '금', '토'];
const dates = Array.from({ length: 35 }, (_, i) => i - 1); // 날짜 + 공백용

export default function Calendar() {
  const [selected, setSelected] = useState<number | null>(15);

  return (
    <Wrapper>
      <Header>
        <IconDirectionLeft size={24} color={theme.sementicColors.icon.tertiary} />
        <Text variant="body_16_semibold" color="primary">
          2025년 4월
        </Text>
        <IconDirectionRight size={24} color={theme.sementicColors.icon.tertiary} />
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
        {dates.map((n, i) => {
          const isDisabled = n <= 0 || n > 30;
          const isSelected = n === selected;

          return (
            <CalendarItem
              key={`calendar-item-${n}`}
              disabled={isDisabled}
              selected={isSelected}
              label={n > 0 ? n.toString() : ''}
              onClick={() => !isDisabled && setSelected(n)}
            />
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;
  padding: 12px 0;
  gap: 4px;
  border-radius: 12px;
  background: ${theme.sementicColors.bg.invers};
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.16),
    0px 0px 2px rgba(0, 0, 0, 0.12);
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
