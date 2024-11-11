import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const CheckMarkRectangle = (
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
      d="M6 2.75A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18V9a.75.75 0 0 1 1.5 0v9A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18V6A4.75 4.75 0 0 1 6 1.25h11a.75.75 0 0 1 0 1.5zm15.502.693a.75.75 0 0 1 .056 1.059l-7.738 8.597a2.75 2.75 0 0 1-3.762.308L6.53 10.586a.75.75 0 0 1 .938-1.172l3.526 2.822a1.25 1.25 0 0 0 1.71-.14l7.737-8.598a.75.75 0 0 1 1.06-.055"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckMarkRectangle);
export default ForwardRef;
