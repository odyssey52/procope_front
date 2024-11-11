import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFilter = (
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
      d="M9 4.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-3.675 1.5A3.751 3.751 0 0 1 12.75 7a3.75 3.75 0 0 1-7.425.75H3a.75.75 0 0 1 0-1.5zM14.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m.75 7.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M11.25 17a3.75 3.75 0 0 1 7.425-.75H21a.75.75 0 0 1 0 1.5h-2.325A3.751 3.751 0 0 1 11.25 17m-9 0a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;
