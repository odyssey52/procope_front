'use client';

import { IconDirectionDown } from '@/shared/assets/icons/line';
import React from 'react';
import styled, { css } from 'styled-components';

interface Tab2Props {
  name: string;
  selected?: boolean;
}
// state4 는 어떤 상태인지 모르겠음 추후 개발 예정!
const Tab2 = ({ name, selected, ...props }: Tab2Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Wrapper $selected={selected} {...props}>
      <TextBox>
        {name}
        <IconDirectionDown />
      </TextBox>
    </Wrapper>
  );
};

const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 6px;
  border-radius: 8px;
`;

const Wrapper = styled.div<{ $selected?: boolean }>`
  /* color: ${({ theme }) => theme.sementicColors.text.primary}; */
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 10px;
  cursor: pointer;
  ${({ theme }) => theme.fontStyle.body_16_regular};
  ${({ $selected }) =>
    $selected &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.sementicColors.border.secondary};
      ${({ theme }) => theme.fontStyle.body_16_medium};
      color: ${({ theme }) => theme.sementicColors.text.primary};
    `}
  &:hover {
    > ${TextBox} {
      ${({ theme }) => theme.fontStyle.body_16_medium};
      background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
    }
  }
`;

Tab2.displayName = 'Tab2';

export default Tab2;
