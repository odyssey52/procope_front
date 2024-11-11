import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgChat02 = (
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
      d="M1.25 12c0-5.385 4.365-9.75 9.75-9.75h2c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75H6A4.75 4.75 0 0 1 1.25 17zM11 3.75A8.25 8.25 0 0 0 2.75 12v5A3.25 3.25 0 0 0 6 20.25h7a8.25 8.25 0 1 0 0-16.5zM7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgChat02);
export default ForwardRef;
