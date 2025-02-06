import React from 'react';
import styled, { css } from 'styled-components';

interface ChipProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 12 | 14 | 16;
  selected?: boolean;
  disabled?: boolean;
  label: string;
}

const chipLabelSize = {
  12: css`
    ${({ theme }) => theme.fontStyle.caption_12_medium};
  `,
  14: css`
    ${({ theme }) => theme.fontStyle.body_14_medium};
  `,
  16: css`
    ${({ theme }) => theme.fontStyle.body_16_medium};
  `,
};

const chipStyle = (size: ChipProps['size'], disabled: ChipProps['disabled'], selected: ChipProps['selected']) => {
  if (disabled) {
    return css`
      opacity: 0.4;
    `;
  }
  if (selected) {
    if (size === 12) {
      return css`
        background: ${({ theme }) => theme.sementicColors.bg.info_subtle};
        color: ${({ theme }) => theme.sementicColors.text.info};
        border: none;
        z-index: 1;
      `;
    }
    return css`
      background: ${({ theme }) => theme.sementicColors.bg.brand};
      color: ${({ theme }) => theme.sementicColors.text.invers};
      border: none;
      z-index: 1;
    `;
  }
  return css`
    &:hover,
    &:active {
      border: 1px solid ${({ theme }) => theme.sementicColors.border.primary_hover_pressed};
    }
  `;
};

const Chip = ({
  leftIcon,
  rightIcon,
  size = 14,
  disabled,
  selected,
  label,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ChipProps) => {
  return (
    <Wrapper $size={size} $disabled={disabled} $selected={selected} disabled={disabled} {...props}>
      {leftIcon && leftIcon}
      <ChipText $size={size}>{label}</ChipText>
      {rightIcon && rightIcon}
    </Wrapper>
  );
};

interface ChipStyledProps {
  $size?: 12 | 14 | 16;
  $disabled?: boolean;
  $selected?: boolean;
}

const Wrapper = styled.button<ChipStyledProps>`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
  background-color: ${({ theme }) => theme.sementicColors.bg.invers};
  ${({ $size, $disabled, $selected }) => chipStyle($size, $disabled, $selected)};
`;

const ChipText = styled.span<{ $size: 12 | 14 | 16 }>`
  ${({ $size }) => chipLabelSize[$size]};
`;
Chip.displayName = 'Chip';

export default Chip;
