import type { DefaultTheme } from 'styled-components';
import { sementicColors } from './colors';
import { fontStyle } from './typography';
import { breakpoints } from './breakpoints';

export type Colors = typeof sementicColors;
export type FontStyle = typeof fontStyle;

export interface Theme {
  sementicColors: Colors;
  fontStyle: FontStyle;
  breakpoints: typeof breakpoints;
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

export const theme: DefaultTheme = {
  fontStyle,
  sementicColors,
  breakpoints,
};
