import type { DefaultTheme } from 'styled-components';
import { sementicColors } from './colors';
import { fontStyle } from './typography';

export type Colors = typeof sementicColors;
export type FontStyle = typeof fontStyle;

export interface Theme {
  sementicColors: Colors;
  fontStyle: FontStyle;
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

export const theme: DefaultTheme = {
  fontStyle,
  sementicColors,
};
