import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Colors, FontStyle } from '@/styles/theme';

interface Props {
  variant: keyof FontStyle;
  color?: keyof Colors['text'];
  className?: string;
}
const Text = ({ variant, color, children, className }: PropsWithChildren<Props>) => {
  return (
    <Wrapper variant={variant} color={color} className={className}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  ${({ theme, variant }) => theme.fontStyle[variant]}
  color:${({ theme, color }) => (color ? theme.sementicColors.text[color] : theme.sementicColors.text.primary)};
  white-space: pre-wrap;
`;
export default Text;
