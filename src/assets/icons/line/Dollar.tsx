import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Dollar = (
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
      d="M12 5.75a2.75 2.75 0 1 0 0 5.5.75.75 0 0 1 0 1.5 4.25 4.25 0 1 1 4.25-4.25.75.75 0 0 1-1.5 0A2.75 2.75 0 0 0 12 5.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.25 12a.75.75 0 0 1 .75-.75 4.25 4.25 0 1 1-4.25 4.25.75.75 0 0 1 1.5 0A2.75 2.75 0 1 0 12 12.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Dollar);
export default ForwardRef;
