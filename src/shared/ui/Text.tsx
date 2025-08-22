'use client';

import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Colors, FontStyle } from '@/shared/styles/theme';

interface Props {
  variant: keyof FontStyle;
  color?: keyof Colors['text'];
  className?: string;
  ellipsis?: boolean;
  lines?: number;
  nowrap?: boolean;
}

const Text = ({
  variant,
  color,
  children,
  className,
  ellipsis = false,
  lines = 1,
  nowrap = false,
}: PropsWithChildren<Props>) => {
  return (
    <Wrapper
      $variant={variant}
      $color={color}
      $className={className}
      $ellipsis={ellipsis}
      $lines={lines}
      $nowrap={nowrap}
    >
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
  $nowrap?: boolean;
}

const Wrapper = styled.div<TextStyledProps>`
  ${({ theme, $variant }) => theme.fontStyle[$variant]};
  height: fit-content;
  color: ${({ theme, $color }) => ($color ? theme.sementicColors.text[$color] : theme.sementicColors.text.primary)};

  /* 기본 동작: 줄바꿈 처리 */
  white-space: ${({ $ellipsis, $nowrap }) => ($ellipsis ? 'normal' : $nowrap ? 'nowrap' : 'pre-wrap')};
  word-break: break-word;
  word-wrap: break-word;

  /* 말줄임 처리 */
  ${({ $ellipsis, $lines }) =>
    $ellipsis &&
    css`
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${$lines};
      -webkit-box-orient: vertical;
      white-space: normal;
    `}
`;

export default Text;
