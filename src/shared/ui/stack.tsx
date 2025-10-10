'use client';

import styled, { css } from 'styled-components';
import { mqProp } from '@/shared/styles/media';
import type { BreakpointKey } from '@/shared/styles/theme/breakpoints';

type Gap = number | Partial<Record<BreakpointKey, number>>;

export const Stack = styled.div<{ gap?: Gap }>`
  display: flex;
  flex-direction: column;

  ${({ gap }) => {
    if (gap == null) return null;
    if (typeof gap === 'number')
      return css`
        gap: ${gap}px;
      `;
    return mqProp('gap', gap, (v) => `${v}px`);
  }}
`;
