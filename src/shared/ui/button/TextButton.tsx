import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface TextButtonProps {
  $type?: '12' | '16' | '20_underline' | '24';
  $disabled?: boolean;
  $clickable?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

// 공통 스타일 상수
const ICON_SIZE_12 = css`
  svg {
    width: 12px;
    height: 12px;
  }
`;

const ICON_SIZE_16 = css`
  svg {
    width: 16px;
    height: 16px;
  }
`;

const getButtonTypeStyles = (type: TextButtonProps['$type']) => {
  switch (type) {
    case '16':
      return css`
        ${({ theme }) => theme.fontStyle.body_14_medium};
        ${ICON_SIZE_16}
      `;
    case '20_underline':
      return css`
        ${({ theme }) => theme.fontStyle.body_14_underline};
        ${ICON_SIZE_16}
      `;
    case '24':
      return css`
        gap: 4px;
        ${({ theme }) => theme.fontStyle.body_16_regular};
        ${ICON_SIZE_16}
      `;
    case '12':
    default:
      return ICON_SIZE_12;
  }
};

const TextButton = ({
  $type = '12',
  leftIcon,
  rightIcon,
  $disabled,
  $clickable = true,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & TextButtonProps) => {
  return (
    <StyledTextButton $type={$type} $disabled={$disabled} $clickable={$clickable} {...props}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledTextButton>
  );
};

interface StyledTextButtonProps {
  $type?: TextButtonProps['$type'];
  $disabled?: TextButtonProps['$disabled'];
  $clickable?: boolean;
}
const StyledTextButton = styled.button<StyledTextButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  gap: 2px;
  padding: 2px 4px;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.sementicColors.text.primary};
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  border-radius: 8px;

  ${({ $clickable, $disabled }) =>
    $clickable &&
    !$disabled &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ $type }) => getButtonTypeStyles($type)}
`;

export default TextButton;
