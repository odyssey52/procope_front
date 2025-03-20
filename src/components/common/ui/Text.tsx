import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Colors, FontStyle } from '@/styles/theme';

interface Props {
  variant: keyof FontStyle;
  color?: keyof Colors['text'];
  className?: string;
  underline?: boolean;
}
const Text = ({ variant, color, children, className, underline }: PropsWithChildren<Props>) => {
  return (
    <Wrapper $variant={variant} $color={color} $className={className} $underline={underline}>
      {children}
    </Wrapper>
  );
};

interface TextStyledProps {
  $variant: keyof FontStyle;
  $color?: keyof Colors['text'];
  $className?: string;
  $underline?: boolean;
}

const Wrapper = styled.div<TextStyledProps>`
  ${({ theme, $variant }) => theme.fontStyle[$variant]}
  color:${({ theme, $color }) => ($color ? theme.sementicColors.text[$color] : theme.sementicColors.text.primary)};
  white-space: pre-wrap;
  ${({ $underline }) => $underline && 'text-decoration: underline;'}
`;
export default Text;
