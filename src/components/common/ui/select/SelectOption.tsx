import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

export interface SelectOptionProps {
  leftContent?: React.ReactNode;
  state?: 'selected';
  value: string;
  description?: string;
  valueHandler: (value: string) => void;
}

const SelectOption = ({ leftContent, valueHandler, state, value, description }: SelectOptionProps) => {
  return (
    <Wrapper $state={state} onClick={() => valueHandler(value)}>
      {leftContent && leftContent}
      {value && (
        <TextBox>
          <Text variant="body_14_semibold" color="primary">
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

const Wrapper = styled.button<{ $state?: 'selected' }>`
  position: relative;
  cursor: pointer;
  display: flex;
  min-width: 240px;
  gap: 8px;
  padding: 8px 12px;
  &:hover {
    background: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  }

  ${({ theme, $state }) => $state === 'selected' && `background: ${theme.sementicColors.bg.tertiary_hover_pressed}`};
`;
const TextBox = styled.div`
  display: flex;
  gap: 4px;
  flex-grow: 1;
`;

SelectOption.displayName = 'SelectOption';

export default SelectOption;
