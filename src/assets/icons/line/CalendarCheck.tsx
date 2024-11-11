import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCalendarCheck = (
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
      d="M15.494 12.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07M2.25 9A.75.75 0 0 1 3 8.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarCheck);
export default ForwardRef;
