import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSortArrowDown = (
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
      d="M6 5.25a.75.75 0 0 1 .75.75v10.99a1.3 1.3 0 0 0 .184-.17l1.505-1.693a.75.75 0 0 1 1.122.996l-1.506 1.694a2.74 2.74 0 0 1-1.909.919.8.8 0 0 1-.292 0 2.74 2.74 0 0 1-1.91-.92L2.44 16.124a.75.75 0 0 1 1.122-.996l1.505 1.693q.085.096.184.17V6A.75.75 0 0 1 6 5.25m5.25.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSortArrowDown);
export default ForwardRef;
