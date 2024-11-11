import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Chat01 = (
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
      d="M1.25 12c0-5.385 4.365-9.75 9.75-9.75h2c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75H6A4.75 4.75 0 0 1 1.25 17zM11 3.75A8.25 8.25 0 0 0 2.75 12v5A3.25 3.25 0 0 0 6 20.25h7a8.25 8.25 0 1 0 0-16.5z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Chat01);
export default ForwardRef;
