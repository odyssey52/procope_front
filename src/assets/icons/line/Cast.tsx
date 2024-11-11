import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Cast = (
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
      d="M1.25 19a.75.75 0 0 1 .75-.75A2.75 2.75 0 0 1 4.75 21a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1-.75-.75M1.25 15a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 21a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 11a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 2 11.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 3.75A3.25 3.25 0 0 0 2.75 7v.429a.75.75 0 1 1-1.5 0V7A4.75 4.75 0 0 1 6 2.25h12A4.75 4.75 0 0 1 22.75 7v9A4.75 4.75 0 0 1 18 20.75h-2.6a.75.75 0 0 1 0-1.5H18A3.25 3.25 0 0 0 21.25 16V7A3.25 3.25 0 0 0 18 3.75z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Cast);
export default ForwardRef;
