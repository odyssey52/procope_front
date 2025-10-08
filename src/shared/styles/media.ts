import { css } from 'styled-components';
import { breakpoints, BreakpointKey } from './theme/breakpoints';

const px = (n: number) => `${n}px`;

export const up = (key: BreakpointKey) => css`
  @media (min-width: ${px(breakpoints[key])}) {
    ${css``}
  }
`;

export const down = (key: BreakpointKey) => css`
  @media (max-width: ${px(breakpoints[key] - 0.02)}) {
    ${css``}
  }
`;

export const between = (a: BreakpointKey, b: BreakpointKey) => css`
  @media (min-width: ${px(breakpoints[a])}) and (max-width: ${px(breakpoints[b] - 0.02)}) {
    ${css``}
  }
`;

export const only = (key: BreakpointKey) => {
  const keys = Object.keys(breakpoints) as BreakpointKey[];
  const idx = keys.indexOf(key);
  const next = keys[idx + 1];
  if (!next) return up(key);
  return between(key, next);
};

// responsive prop: { sm: 8, md: 12 } 같은 맵을 CSS로 변환
export function mqProp<T>(
  prop: string,
  values: Partial<Record<BreakpointKey, T>>,
  transform: (v: T) => string = (v) => String(v),
) {
  const keys = Object.keys(values) as BreakpointKey[];
  return css`
    ${keys.map(
      (k) => css`
        @media (min-width: ${px(breakpoints[k])}) {
          ${prop}: ${transform(values[k] as T)};
        }
      `,
    )}
  `;
}
