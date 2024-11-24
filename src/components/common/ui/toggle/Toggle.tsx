import React from 'react';
import styled, { css } from 'styled-components';

interface ToggleProps {
  size?: 20 | 24;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
}

const toggleStyle = (disabled: ToggleProps['disabled'], checked: ToggleProps['checked']) => {
  if (disabled) {
    if (checked) {
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
        &:hover {
          cursor: not-allowed;
        }
      `;
    }
    return css`
      background-color: ${({ theme }) => theme.sementicColors.bg.disabled};
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
  label,
  disabled,
  checked,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ToggleProps) => {
  return (
    <Wrapper $size={size} $disabled={disabled} {...props} disabled={disabled}>
      {label}
      <ToggleSwitch $size={size} $disabled={disabled} $checked={checked}>
        <Circle $checked={checked} $size={size} />
      </ToggleSwitch>
    </Wrapper>
  );
};

interface ToggleStyledProps {
  $size: 20 | 24;
  $disabled?: boolean;
  $checked?: boolean;
}

const Wrapper = styled.button<{ $size: 20 | 24; $disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  gap: 4px;
  ${({ $size, theme }) => ($size === 20 ? theme.fontStyle.caption_12_medium : theme.fontStyle.body_14_semibold)};
  opacity: ${({ $disabled }) => $disabled && 0.4};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.sementicColors.text.disabled : theme.sementicColors.text.primary};
`;
const ToggleSwitch = styled.div<ToggleStyledProps>`
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
