import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ZoomText = (
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
      d="M1.25 4A.75.75 0 0 1 2 3.25h13a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4M16 8.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M9.25 14a6.75 6.75 0 1 1 12.024 4.213l1.256 1.257a.75.75 0 1 1-1.06 1.06l-1.257-1.256A6.75 6.75 0 0 1 9.25 14m-8-5A.75.75 0 0 1 2 8.25h5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomText);
export default ForwardRef;
