import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Euro = (
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
      d="M15.167 4.75C11.056 4.75 7.75 8.01 7.75 12s3.306 7.25 7.417 7.25c2.08 0 3.957-.836 5.303-2.182a.75.75 0 0 1 1.06 1.061 8.98 8.98 0 0 1-6.363 2.621c-4.91 0-8.917-3.903-8.917-8.75s4.007-8.75 8.917-8.75a8.98 8.98 0 0 1 6.363 2.62.75.75 0 1 1-1.06 1.062 7.48 7.48 0 0 0-5.303-2.182"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 14a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M2.25 10A.75.75 0 0 1 3 9.25h13a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Euro);
export default ForwardRef;
