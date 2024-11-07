import styled, { css, DefaultTheme } from 'styled-components';

interface IconButtonProps {
  size?: '36px' | '48px'; // default : 40px
  status?: 'secondary' | 'outline' | 'tertiary'; // default : primary
  leftIcon?: string;
  rightIcon?: string;
}

const buttonStatusStyle = (status?: 'secondary' | 'outline' | 'tertiary') => (theme: DefaultTheme) => {
  if (status === 'secondary')
    return css`
      background-color: ${theme.sementicColors.bg.primary};
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
      background-color: ${theme.sementicColors.bg.invers};
      border: 1px solid ${theme.sementicColors.border.primary};
      &:hover,
      &:active {
        background-color: ${theme.sementicColors.bg.tertiary};
        border: 1px solid ${theme.sementicColors.border.primary};
        box-shadow: 0px 0px 0px 2px rgba(47, 78, 118, 0.3);
      }
      &:disabled {
        background-color: ${theme.sementicColors.bg.invers};
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
  return css`
    background-color: ${theme.sementicColors.bg.brand};
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
};

const IconButton = ({ size, status, leftIcon, rightIcon }: IconButtonProps) => {
  return <Wrapper size={size} status={status} leftIcon={leftIcon} rightIcon={rightIcon} />;
};

const Wrapper = styled.button<IconButtonProps>`
  ${({ status, theme }) => buttonStatusStyle(status)(theme)};
  height: ${({ size }) => size || '40px'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: ${({ size }) => (size === '36px' ? '8px' : '12px')};
  gap: ${({ size }) => (size === '36px' ? '4px' : size === '48px' ? '8px' : '6px')};

  &::before {
    content: '';
    display: ${({ leftIcon }) => (leftIcon ? 'inline-block' : 'none')};
    mask: url(${({ leftIcon }) => leftIcon}) no-repeat center;
    background-color: ${({ status, theme }) =>
      status === 'outline' || status === 'tertiary'
        ? theme.sementicColors.icon.primary
        : theme.sementicColors.icon.invers};
    width: 20px;
    height: 20px;
  }
  &::after {
    content: '';
    display: ${({ rightIcon }) => (rightIcon ? 'inline-block' : 'none')};
    mask: url(${({ rightIcon }) => rightIcon}) no-repeat center;
    background-color: ${({ status, theme }) =>
      status === 'outline' || status === 'tertiary'
        ? theme.sementicColors.icon.primary
        : theme.sementicColors.icon.invers};
    width: 20px;
    height: 20px;
  }
`;

export default IconButton;
