import { theme } from '@/shared/styles/theme';
import React from 'react';
import styled, { css } from 'styled-components';

interface LabelProps {
  text: string;
  icon?: React.ReactNode;
  size?: 12 | 14 | 16; // default 14
  required?: boolean; // 필수 입력 여부 표시 ( * )
  disabled?: boolean;
}
const LABEL_STYLE_LIST = {
  12: {
    font: theme.fontStyle.caption_12_medium,
    iconSize: 16,
  },
  14: {
    font: theme.fontStyle.body_14_semibold,
    iconSize: 20,
  },
  16: {
    font: theme.fontStyle.body_16_semibold,
    iconSize: 20,
  },
};

const Label = ({ icon, size = 14, required, disabled, text }: LabelProps) => {
  return (
    <Wrapper $size={size} $disabled={disabled}>
      {icon && icon}
      {text}
      {required && <Required>*</Required>}
    </Wrapper>
  );
};
interface LabelStyledProps {
  $size: 12 | 14 | 16;
  $disabled?: boolean;
}
const Wrapper = styled.span<LabelStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 2px;
  ${({ $size }) => LABEL_STYLE_LIST[$size].font};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.sementicColors.text.disabled : theme.sementicColors.text.primary};
  svg {
    width: ${({ $size }) => LABEL_STYLE_LIST[$size].iconSize}px;
    height: ${({ $size }) => LABEL_STYLE_LIST[$size].iconSize}px;

    color: ${({ $disabled, theme }) => $disabled && theme.sementicColors.icon.disabled};
  }
`;

const Required = styled.span`
  color: ${({ theme }) => theme.sementicColors.text.brand};
`;

Label.displayName = 'Label';

export default Label;
