import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBrowser = (
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
      d="M6 2.75A3.25 3.25 0 0 0 2.75 6v1.25h18.5V6A3.25 3.25 0 0 0 18 2.75zM22.75 6A4.75 4.75 0 0 0 18 1.25H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18zm-1.5 2.75H2.75V18A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M19 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgBrowser);
export default ForwardRef;
