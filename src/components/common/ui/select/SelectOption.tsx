import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

export interface SelectOptionProps {
  leftContent?: React.ReactNode;
  state?: 'selected';
  text?: string;
  description?: string;
}

const SelectOption = ({ leftContent, state, text, description }: SelectOptionProps) => {
  return (
    <Wrapper $state={state}>
      {leftContent && leftContent}
      {text && (
        <TextBox>
          <Text variant="body_14_semibold" color="primary">
            {text}
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

const Wrapper = styled.div<{ $state?: 'selected' }>`
  position: relative;
  display: flex;
  min-width: 240px;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
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
