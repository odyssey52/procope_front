'use client';

import styled, { css } from 'styled-components';
import Text from '../Text';

interface CalendarItemProps {
  disabled: boolean;
  selected: boolean;
  label: string;
  onClick: () => void;
}

const CalendarItem = ({ disabled, selected, label, onClick }: CalendarItemProps) => {
  return (
    <Wrapper disabled={disabled} selected={selected} onClick={onClick}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ disabled: boolean; selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  cursor: pointer;
  ${({ theme }) => theme.fontStyle.body_14_regular};
  color: ${({ theme }) => theme.sementicColors.text.primary};

  ${({ selected }) =>
    selected
      ? css`
          ${({ theme }) => theme.fontStyle.body_14_semibold};
          background: ${({ theme }) => theme.sementicColors.bg.primary};
          color: ${({ theme }) => theme.sementicColors.text.invers};
          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        `
      : css`
          &:hover {
            background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
          }
          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.sementicColors.text.disabled};
            &:hover {
              background: ${({ theme }) => theme.sementicColors.bg.invers};
            }
          }
        `}
`;

export default CalendarItem;
