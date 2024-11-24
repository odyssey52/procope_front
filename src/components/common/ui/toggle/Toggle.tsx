import React from 'react';
import styled, { css } from 'styled-components';

interface ToggleProps {
  size?: 20 | 24;
  disabled?: boolean;
  checked?: boolean;
}

const toggleStyle = (disabled: ToggleProps['disabled'], checked: ToggleProps['checked']) => {
  if (disabled) {
    if (checked) {
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
        opacity: 0.3;
        &:hover {
          cursor: not-allowed;
        }
      `;
    }
    return css`
      background-color: ${({ theme }) => theme.sementicColors.bg.disabled};
      opacity: 0.3;
      &:hover {
        cursor: not-allowed;
      }
    `;
  }
  if (checked) {
    return css`
      background-color: ${({ theme }) => theme.sementicColors.bg.brand};
    `;
  }
};
const toggleSize = {
  20: css`
    width: 34px;
    height: 20px;
    border-radius: 10px;
  `,
  24: css`
    width: 46px;
    height: 24px;
    border-radius: 12px;
  `,
};
const Toggle = ({
  size = 20,
  disabled,
  checked,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ToggleProps) => {
  return (
    <Wrapper $size={size} $disabled={disabled} $checked={checked} {...props} disabled={disabled}>
      <Circle $checked={checked} $size={size} />
    </Wrapper>
  );
};

interface ToggleStyledProps {
  $size: 20 | 24;
  $disabled?: boolean;
  $checked?: boolean;
}

const Wrapper = styled.button<ToggleStyledProps>`
  position: relative;
  display: flex;
  cursor: pointer;
  background-color: ${({ theme }) => theme.sementicColors.bg.disabled_bold};
  ${({ $disabled, $checked }) => toggleStyle($disabled, $checked)};
  transition: background-color 0.2s;
  padding: 2px;
  ${({ $size }) => toggleSize[$size]};
`;
const Circle = styled.span<{ $checked?: boolean; $size: 20 | 24 }>`
  position: absolute;
  display: block;
  aspect-ratio: 1/1;
  height: calc(100% - 4px);
  /* box-shadow: 0px 0px 0.5px rgba(0, 0, 0, 0.12); */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.sementicColors.bg.invers};
  transition: 0.2s;
  left: ${({ $checked, $size }) => ($checked ? `calc(100% - ${$size - 2}px)` : '2px')};
`;

Toggle.displayName = 'Toggle';

export default Toggle;
