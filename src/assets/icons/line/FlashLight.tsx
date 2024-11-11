import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const FlashLight = (
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
      d="M5.25 2.857c0-.887.72-1.607 1.607-1.607h10.286c.887 0 1.607.72 1.607 1.607a5.89 5.89 0 0 1-3 5.135V19a3.75 3.75 0 1 1-7.5 0V7.992a5.89 5.89 0 0 1-3-5.135m1.607-.107a.107.107 0 0 0-.107.107c0 1.772 1.049 3.3 2.563 3.995a.75.75 0 0 1 .437.682V19a2.25 2.25 0 0 0 4.5 0V7.534c0-.293.17-.56.437-.682a4.39 4.39 0 0 0 2.563-3.995.107.107 0 0 0-.107-.107z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(FlashLight);
export default ForwardRef;
