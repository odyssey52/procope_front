import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Colors, FontStyle } from '@/styles/theme';

interface Props {
  variant: keyof FontStyle;
  color?: keyof Colors['text'];
  className?: string;
  ellipsis?: boolean;
  lines?: number;
}

const Text = ({ variant, color, children, className, ellipsis = false, lines = 1 }: PropsWithChildren<Props>) => {
  return (
    <Wrapper $variant={variant} $color={color} $className={className} $ellipsis={ellipsis} $lines={lines}>
      {children}
    </Wrapper>
  );
};

interface TextStyledProps {
  $variant: keyof FontStyle;
  $color?: keyof Colors['text'];
  $className?: string;
  $ellipsis?: boolean;
  $lines?: number;
}

const Wrapper = styled.div<TextStyledProps>`
  ${({ theme, $variant }) => theme.fontStyle[$variant]};
  color: ${({ theme, $color }) => ($color ? theme.sementicColors.text[$color] : theme.sementicColors.text.primary)};

  /* 기본 동작: 줄바꿈 처리 */
  white-space: ${({ $ellipsis }) => ($ellipsis ? 'normal' : 'pre-wrap')};

  /* 말줄임 처리 */
  ${({ $ellipsis, $lines }) =>
    $ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;

      /* 단일 줄 말줄임 처리 */
      ${$lines === 1 &&
      css`
        white-space: nowrap;
      `}

      /* 다줄 말줄임 처리 */
      ${$lines &&
      $lines > 1 &&
      css`
        display: -webkit-box;
        -webkit-line-clamp: ${$lines};
        -webkit-box-orient: vertical;
        white-space: normal;
      `}
    `}
`;

export default Text;
