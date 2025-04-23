import styled, { keyframes, DefaultTheme } from 'styled-components';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'brand' | 'info' | 'navy' | 'warning' | 'success' | 'danger';
}

const sizeMap = {
  small: '16px',
  medium: '24px',
  large: '32px',
} as const;

const getSpinnerColor =
  (variant: LoadingSpinnerProps['variant'] = 'brand') =>
  (theme: DefaultTheme) => {
    switch (variant) {
      case 'primary':
        return theme.sementicColors.bg.primary;
      case 'info':
        return theme.sementicColors.bg.info_bold;
      case 'navy':
        return theme.sementicColors.bg.navy_bold;
      case 'warning':
        return theme.sementicColors.bg.warning_bold;
      case 'success':
        return theme.sementicColors.bg.success_bold;
      case 'danger':
        return theme.sementicColors.bg.danger;
      default:
        return theme.sementicColors.bg.brand;
    }
  };

export function LoadingSpinner({ size = 'medium', variant = 'brand' }: LoadingSpinnerProps) {
  return (
    <SpinnerWrapper>
      <Spinner size={size} variant={variant} />
    </SpinnerWrapper>
  );
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
`;

const Spinner = styled.div<{ size: 'small' | 'medium' | 'large'; variant: LoadingSpinnerProps['variant'] }>`
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
  border: 2px solid ${({ theme }) => theme.sementicColors.bg.tertiary};
  border-top: 2px solid ${({ theme, variant }) => getSpinnerColor(variant)(theme)};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
