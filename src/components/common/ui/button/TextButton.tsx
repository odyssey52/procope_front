import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface TextButtonProps {
  $type?: '16' | '20_underline' | '24'; // default: '12'
  $disabled?: boolean; // For disabling styles only, not event blocking
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const getButtonTypeStyles = (type: TextButtonProps['$type']) => {
  switch (type) {
    case '16':
      return css`
        ${({ theme }) => theme.fontStyle.body_14_medium};
        svg {
          width: 16px;
          height: 16px;
        }
      `;
    case '20_underline':
      return css`
        ${({ theme }) => theme.fontStyle.body_14_underline};
        svg {
          width: 16px;
          height: 16px;
        }
      `;
    case '24':
      return css`
        ${({ theme }) => theme.fontStyle.body_16_regular};
        svg {
          width: 16px;
          height: 16px;
        }
      `;
    default:
      return css`
        svg {
          width: 12px;
          height: 12px;
        }
      `;
  }
};

const TextButton = ({
  $type,
  leftIcon,
  rightIcon,
  $disabled,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & TextButtonProps) => {
  return (
    <StyledTextButton $type={$type} $disabled={$disabled} {...props}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledTextButton>
  );
};

interface StyledTextButtonProps {
  $type?: TextButtonProps['$type'];
  $disabled?: TextButtonProps['$disabled'];
}
const StyledTextButton = styled.button<StyledTextButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 2px 4px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.sementicColors.text.primary};
  ${({ theme }) => theme.fontStyle.caption_12_regular};
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.sementicColors.bg.tertiary_hover_pressed};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ $type }) => getButtonTypeStyles($type)}
`;

export default TextButton;
