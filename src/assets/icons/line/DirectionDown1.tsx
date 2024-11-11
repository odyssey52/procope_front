import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const DirectionDown1 = (
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
      d="M7.469 6.414a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.937-1.172L12 10.04zm0 6a.75.75 0 1 0-.937 1.172l5 4a.75.75 0 0 0 .937 0l5-4a.75.75 0 1 0-.937-1.172L12 16.04z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(DirectionDown1);
export default ForwardRef;
