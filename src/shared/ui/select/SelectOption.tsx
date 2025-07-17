'use client';

import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

export interface SelectOptionProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  state?: 'selected';
  value: string | React.ReactNode;
  description?: string;
  valueHandler: (value: string | React.ReactNode) => void;
  width?: string;
  pageName?: string;
  borderRadius?: string;
}

const SelectOption = ({
  leftContent,
  valueHandler,
  state,
  value,
  description,
  width = '240px',
  pageName,
  borderRadius,
  rightContent,
}: SelectOptionProps) => {
  return (
    <Wrapper $state={state} $width={width} $borderRadius={borderRadius} onClick={() => valueHandler(value)}>
      {leftContent && leftContent}
      {value && (
        <TextBox>
          <Text variant="body_14_medium" color={pageName === value ? 'brand' : 'primary'} ellipsis>
            {value}
          </Text>
          {description && (
            <Text variant="caption_12_regular" color="secondary" ellipsis>
              {description}
            </Text>
          )}
        </TextBox>
      )}
      {rightContent && rightContent}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ $state?: 'selected'; $width?: string; $borderRadius?: string }>`
  position: relative;
  cursor: pointer;
  display: flex;
  width: ${({ $width }) => $width};
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  user-select: none;
  &:hover {
    background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
    border-radius: ${({ $borderRadius }) => ($borderRadius ? `${$borderRadius}` : 'none')};
  }

  ${({ theme, $state }) => $state === 'selected' && `background: ${theme.sementicColors.bg.tertiary_hover_pressed}`};
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex-grow: 1;
  user-select: none;
`;

SelectOption.displayName = 'SelectOption';

export default SelectOption;
