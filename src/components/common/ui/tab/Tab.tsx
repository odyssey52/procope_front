'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

interface TabProps {
  leftIcon: ReactNode;
  text: string;
  rightIcon?: ReactNode;
  selected?: boolean;
}
const Tab = ({ leftIcon, text, rightIcon, selected }: TabProps) => {
  return (
    <Wrapper $selected={selected}>
      {leftIcon}
      <span>{text}</span>
      {rightIcon && rightIcon}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $selected?: boolean }>`
  position: relative;
  display: flex;
  min-width: 268px;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  ${({ theme, $selected }) => ($selected ? theme.fontStyle.body_16_semibold : theme.fontStyle.body_16_medium)}
  color: ${({ theme, $selected }) =>
    $selected ? theme.sementicColors.text.invers : theme.sementicColors.text.disabled};
  cursor: pointer;
  > span {
    flex-grow: 1;
  }
`;

Tab.displayName = 'Tab';

export default Tab;
