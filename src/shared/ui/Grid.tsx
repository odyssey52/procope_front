'use client';

import styled, { css } from 'styled-components';
import { mqProp } from '@/shared/styles/media';
import type { BreakpointKey } from '@/shared/styles/theme/breakpoints';

type Responsive<T> = T | Partial<Record<BreakpointKey, T>>;

export const Grid = styled.div<{
  cols?: Responsive<number>;
  gap?: Responsive<number>;
  minColWidth?: string; // '220px' 같이 사용
}>`
  display: grid;

  ${({ gap }) => {
    if (gap == null) return null;
    if (typeof gap === 'number')
      return css`
        gap: ${gap}px;
      `;
    return mqProp('gap', gap, (v) => `${v}px`);
  }}

  ${({ cols, minColWidth }) => {
    if (minColWidth) {
      return css`
        grid-template-columns: repeat(auto-fit, minmax(${minColWidth}, 1fr));
      `;
    }
    if (cols == null) return null;
    if (typeof cols === 'number')
      return css`
        grid-template-columns: repeat(${cols}, 1fr);
      `;
    return mqProp('grid-template-columns', cols, (v) => `repeat(${v}, 1fr)`);
  }}
`;
