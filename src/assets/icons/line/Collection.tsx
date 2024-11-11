import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCollection = (
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
      d="M5.25 5A2.75 2.75 0 0 1 8 2.25h8A2.75 2.75 0 0 1 18.75 5v1.354c1.154.326 2 1.387 2 2.646v1.354c1.154.326 2 1.387 2 2.646v4A4.75 4.75 0 0 1 18 21.75H6A4.75 4.75 0 0 1 1.25 17v-4c0-1.259.846-2.32 2-2.646V9c0-1.259.846-2.32 2-2.646zm1.5 1.25h10.5V5c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25zm-2 4h14.5V9c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25zM4 11.75c-.69 0-1.25.56-1.25 1.25v4A3.25 3.25 0 0 0 6 20.25h12A3.25 3.25 0 0 0 21.25 17v-4c0-.69-.56-1.25-1.25-1.25zM9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCollection);
export default ForwardRef;
