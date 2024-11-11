import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const CalendarMinus = (
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
      d="M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 7.5A4.75 4.75 0 0 1 7 2.75h10a4.75 4.75 0 0 1 4.75 4.75V18A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18zM7 4.25A3.25 3.25 0 0 0 3.75 7.5V18A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18V7.5A3.25 3.25 0 0 0 17 4.25z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.75 15a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75M21.75 9a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarMinus);
export default ForwardRef;
