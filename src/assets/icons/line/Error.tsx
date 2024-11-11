import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Error = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size} ref={ref} {...props}>
    <path fill="currentColor" d="M11 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.54 1.926a4.82 4.82 0 0 1 4.92 0l4.844 2.868c1.52.9 2.446 2.556 2.446 4.338v5.736c0 1.782-.927 3.438-2.446 4.338l-4.843 2.868a4.82 4.82 0 0 1-4.922 0l-4.843-2.868c-1.52-.9-2.446-2.556-2.446-4.338V9.132c0-1.782.927-3.438 2.446-4.338zm4.156 1.29a3.32 3.32 0 0 0-3.392 0L5.46 6.086C4.408 6.708 3.75 7.867 3.75 9.132v5.736c0 1.265.658 2.424 1.71 3.047l4.844 2.868a3.32 3.32 0 0 0 3.392 0l4.843-2.868c1.053-.623 1.711-1.782 1.711-3.047V9.132c0-1.265-.658-2.424-1.71-3.047zM12 6.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Error);
export default ForwardRef;
