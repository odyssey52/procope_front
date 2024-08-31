import type { DefaultTheme } from "styled-components";

export const fontStyle = {};

const primitive = {
  // base: {
  //   black: "#000000",
  // },
  // blue: {
  //   500: "#2E89FF",
  // },
  // navy: {},
  // red: {},
  // yellow: {},
  // green: {},
  // gray: {},
};

export const colors = {
  // text: {
  //   brand: primitive.blue[500],
  // },
  // bg: {},
  // icon: {},
  // border: {},
};

export type Colors = typeof colors;
export type FontStyle = typeof fontStyle;

export interface Theme {
  colors: Colors;
  fontStyle: FontStyle;
}

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}

export const theme: DefaultTheme = {
  fontStyle,
  colors,
};
