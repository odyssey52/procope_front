import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSortArrowUp = (
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
      d="M5.25 7.01V18a.75.75 0 0 0 1.5 0V7.01q.099.075.184.17L8.44 8.873a.75.75 0 1 0 1.122-.996L8.055 6.183a2.74 2.74 0 0 0-1.909-.919.8.8 0 0 0-.292 0 2.74 2.74 0 0 0-1.91.92L2.44 7.876a.75.75 0 0 0 1.122.996L5.066 7.18q.085-.096.184-.17m6-1.01a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSortArrowUp);
export default ForwardRef;
