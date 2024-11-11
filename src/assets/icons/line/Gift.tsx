import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgGift = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size} ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.25 4A2.75 2.75 0 0 1 8 1.25c1.68 0 3.155.872 4 2.187a4.75 4.75 0 0 1 4-2.187 2.75 2.75 0 0 1 2.45 4H20A2.75 2.75 0 0 1 22.75 8v1c0 1.259-.846 2.32-2 2.646V20A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20v-8.353A2.75 2.75 0 0 1 1.25 9V8A2.75 2.75 0 0 1 4 5.25h1.55c-.192-.375-.3-.8-.3-1.25M8 5.25h3.163A3.25 3.25 0 0 0 8 2.75a1.25 1.25 0 1 0 0 2.5m3.25 1.5H4c-.69 0-1.25.56-1.25 1.25v1c0 .69.56 1.25 1.25 1.25h7.25zm0 5h-6.5V20c0 .69.56 1.25 1.25 1.25h5.25zm1.5 9.5v-9.5h6.5V20c0 .69-.56 1.25-1.25 1.25zm0-11v-3.5H20c.69 0 1.25.56 1.25 1.25v1c0 .69-.56 1.25-1.25 1.25zm.087-5H16a1.25 1.25 0 1 0 0-2.5 3.25 3.25 0 0 0-3.163 2.5"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGift);
export default ForwardRef;
