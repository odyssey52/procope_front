'use client';

import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  $type?: 'secondary' | 'outline' | 'error' | 'tertiary'; // default : primary
  size?: '36' | '48'; // default : 40
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  pressed?: boolean;
}

const getButtonTypeStyles = (type: ButtonProps['$type'], pressed?: boolean) => {
  switch (type) {
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.primary};
        ${pressed &&
        css`
          background-color: ${({ theme }) => theme.sementicColors.bg.primary_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
        `}
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.sementicColors.bg.primary_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.primary};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    case 'outline':
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
        border: 1px solid ${({ theme }) => theme.sementicColors.border.primary};
        color: ${({ theme }) => theme.sementicColors.text.primary};
        ${pressed &&
        css`
          background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
        `}
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.sementicColors.bg.tertiary};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
          color: ${({ theme }) => theme.sementicColors.text.primary_hover_pressed};
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.inverse};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    case 'error':
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.danger};
        ${pressed &&
        css`
          background-color: ${({ theme }) => theme.sementicColors.bg.danger_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(248, 113, 113, 0.4);
        `}
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.sementicColors.bg.danger_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(248, 113, 113, 0.4);
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.danger};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    case 'tertiary':
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
        color: ${({ theme }) => theme.sementicColors.text.primary};
        ${pressed &&
        css`
          background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
          color: ${({ theme }) => theme.sementicColors.text.primary_hover_pressed};
        `}
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
          color: ${({ theme }) => theme.sementicColors.text.primary_hover_pressed};
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
          color: ${({ theme }) => theme.sementicColors.text.primary};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.sementicColors.bg.brand};
        ${pressed &&
        css`
          background-color: ${({ theme }) => theme.sementicColors.bg.brand_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(94, 164, 255, 0.4);
        `}
        &:hover,
        &:active {
          background-color: ${({ theme }) => theme.sementicColors.bg.brand_hover_pressed};
          box-shadow: 0px 0px 0px 2px rgba(94, 164, 255, 0.4);
        }
        &:disabled {
          background-color: ${({ theme }) => theme.sementicColors.bg.brand};
          opacity: 0.4;
          box-shadow: none;
        }
      `;
  }
};

const getButtonSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case '36':
      return css`
        padding: 8px 12px;
        height: 36px;
      `;
    case '48':
      return css`
        height: 48px;
        ${({ theme }) => theme.fontStyle.body_16_medium};
        svg {
          width: 24px;
          height: 24px;
        }
      `;
    default:
      return css`
        height: 40px;
      `;
  }
};

const Button = ({
  $type,
  size,
  leftIcon,
  rightIcon,
  children,
  pressed,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <StyledButton $type={$type} size={size} $pressed={pressed} {...props}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

interface StyledButtonProps {
  $type?: ButtonProps['$type'];
  size?: ButtonProps['size'];
  $pressed?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme }) => theme.sementicColors.text.inverse};
  ${({ theme }) => theme.fontStyle.body_14_medium};
  border-radius: 12px;
  &:disabled {
    &:hover,
    &:active {
      box-shadow: none;
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
  ${({ $type, $pressed }) => getButtonTypeStyles($type, $pressed)}
  ${({ size }) => getButtonSizeStyles(size)}
`;

Button.displayName = 'Button';

export default Button;
