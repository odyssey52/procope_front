import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Files01 = (
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
      d="M7.298 2.641a4.75 4.75 0 0 1 3.359-1.391H13c2.386 0 4.36 1.76 4.699 4.051A4.75 4.75 0 0 1 21.75 10v8A4.75 4.75 0 0 1 17 22.75h-6a4.75 4.75 0 0 1-4.699-4.051A4.75 4.75 0 0 1 2.25 14V9.657c0-1.26.5-2.468 1.391-3.359zm.539 16.109A3.25 3.25 0 0 0 11 21.25h6A3.25 3.25 0 0 0 20.25 18v-8a3.25 3.25 0 0 0-2.5-3.163V14A4.75 4.75 0 0 1 13 18.75zM9.75 2.88V4A4.75 4.75 0 0 1 5 8.75H3.88q-.13.44-.13.907V14A3.25 3.25 0 0 0 7 17.25h6A3.25 3.25 0 0 0 16.25 14V6A3.25 3.25 0 0 0 13 2.75h-2.343q-.467 0-.907.13M4.81 7.25H5A3.25 3.25 0 0 0 8.25 4v-.19z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Files01);
export default ForwardRef;
