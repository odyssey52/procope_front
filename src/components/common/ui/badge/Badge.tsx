import styled, { DefaultTheme } from 'styled-components';

interface BadgeProps {
  size: 'small' | 'large';
  text?: string;
  status?: 'success' | 'warning' | 'error' | 'info'; // default : primary
}

const badgeSizeStyle = (size: 'small' | 'large') => (text?: string) => {
  if (size === 'small' && text) return 'height: 16px';
  if (size === 'small' && !text) return 'width: 4px; height: 4px';
  if (size === 'large' && text) return 'height: 20px';
  if (size === 'large' && !text) return 'width: 8px; height: 8px';
  return null;
};

const badgeBackgroundColor = (status?: 'success' | 'warning' | 'error' | 'info') => (theme: DefaultTheme) => {
  if (status === 'success') return theme.sementicColors.bg.success_bold;
  if (status === 'warning') return theme.sementicColors.bg.warning_bold;
  if (status === 'error') return theme.sementicColors.bg.danger;
  if (status === 'info') return theme.sementicColors.bg.info_bold;
  return theme.sementicColors.bg.primary;
};

const Badge = ({ size, text, status }: BadgeProps) => {
  return (
    <Wrapper size={size} status={status} text={text}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.span<BadgeProps>`
  ${({ size, text }) => badgeSizeStyle(size)(text)};
  background-color: ${({ status, theme }) => badgeBackgroundColor(status)(theme)};
  color: ${({ status, theme }) =>
    status === 'warning' ? theme.sementicColors.text.primary : theme.sementicColors.text.invers};
  padding: ${({ size, text }) => text && (size === 'small' ? '2px 4px' : '2px 8px')};
  border-radius: 9999px;
  ${({ size, theme }) => (size === 'small' ? theme.fontStyle.caption_10_regular : theme.fontStyle.caption_12_medium)}
`;

export default Badge;
