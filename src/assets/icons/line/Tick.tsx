import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Tick = (
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
      d="M19.502 6.443a.75.75 0 0 1 .056 1.059l-7.738 8.597a2.75 2.75 0 0 1-3.762.308l-3.526-2.821a.75.75 0 0 1 .937-1.172l3.526 2.822a1.25 1.25 0 0 0 1.71-.14l7.738-8.598a.75.75 0 0 1 1.059-.055"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Tick);
export default ForwardRef;
