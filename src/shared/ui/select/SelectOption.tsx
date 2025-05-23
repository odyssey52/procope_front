import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

export interface SelectOptionProps {
  leftContent?: React.ReactNode;
  state?: 'selected';
  value: string;
  description?: string;
  valueHandler: (value: string) => void;
  width?: number;
  pageName?: string;
  borderRadius?: string;
}

const SelectOption = ({
  leftContent,
  valueHandler,
  state,
  value,
  description,
  width,
  pageName,
  borderRadius,
}: SelectOptionProps) => {
  return (
    <Wrapper $state={state} $width={width} $borderRadius={borderRadius} onClick={() => valueHandler(value)}>
      {leftContent && leftContent}
      {value && (
        <TextBox>
          <Text variant="body_14_semibold" color={pageName === value ? 'brand' : 'primary'}>
            {value}
          </Text>
          {description && (
            <Text variant="caption_12_regular" color="secondary">
              {description}
            </Text>
          )}
        </TextBox>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ $state?: 'selected'; $width?: number; $borderRadius?: string }>`
  position: relative;
  cursor: pointer;
  display: flex;
  min-width: ${({ $width }) => ($width ? `${$width}px` : '240px')};
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
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
`;

SelectOption.displayName = 'SelectOption';

export default SelectOption;
