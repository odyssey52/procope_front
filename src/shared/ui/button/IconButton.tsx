import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 36 | 40 | 48;
  status?: 'primary' | 'secondary' | 'outline' | 'tertiary';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const buttonStatusStyle = (status?: IconButtonProps['status']) => (theme: DefaultTheme) => {
  if (status === 'secondary')
    return css`
      background-color: ${theme.sementicColors.bg.primary};
      > svg {
        color: ${theme.sementicColors.icon.invers};
      }
      &:hover,
      &:active {
        background-color: ${theme.sementicColors.bg.primary_hover_pressed};
        box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
      }
      &:disabled {
        background-color: ${theme.sementicColors.bg.primary};
        opacity: 0.4;
      }
    `;
  if (status === 'outline')
    return css`
      background-color: ${theme.sementicColors.bg.inverse};
      border: 1px solid ${theme.sementicColors.border.primary};
      &:hover,
      &:active {
        background-color: ${theme.sementicColors.bg.tertiary};
        border: 1px solid ${theme.sementicColors.border.primary};
        box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
      }
      &:disabled {
        background-color: ${theme.sementicColors.bg.inverse};
        border: 1px solid ${theme.sementicColors.border.primary};
        opacity: 0.4;
      }
    `;
  if (status === 'tertiary')
    return css`
      background-color: ${theme.sementicColors.bg.tertiary_hover_pressed};

      &:hover,
      &:active {
        background-color: ${theme.sementicColors.bg.tertiary_hover_pressed};
        box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
      }
      &:disabled {
        background-color: ${theme.sementicColors.bg.tertiary_hover_pressed};
        opacity: 0.4;
      }
    `;
  if (status === 'primary') {
    return css`
      background-color: ${theme.sementicColors.bg.brand};
      > svg {
        color: ${theme.sementicColors.icon.invers};
      }
      &:hover,
      &:active {
        background-color: ${theme.sementicColors.bg.brand_hover_pressed};
        box-shadow: 0px 0px 0px 2px rgba(94, 164, 255, 0.4);
      }
      &:disabled {
        background: ${theme.sementicColors.bg.brand};
        opacity: 0.4;
      }
    `;
  }
};

const IconButton = ({ size = 40, status = 'primary', leftIcon, rightIcon, ...rest }: IconButtonProps) => {
  return (
    <Wrapper size={size} status={status} {...rest}>
      {leftIcon && leftIcon}
      {rightIcon && rightIcon}
    </Wrapper>
  );
};

type WrapperProps = Pick<IconButtonProps, 'size' | 'status'>;

const Wrapper = styled.button<WrapperProps>`
  ${({ status, theme }) => buttonStatusStyle(status)(theme)};
  height: ${({ size }) => size || '40px'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: ${({ size }) => (size === 36 ? '8px' : '12px')};
  gap: ${({ size }) => (size === 36 ? '4px' : size === 48 ? '8px' : '6px')};
  > svg {
    width: 20px;
    height: 20px;
  }
`;

export default IconButton;
