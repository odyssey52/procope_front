import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const DirectionUp1 = (
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
      d="M7.469 17.586a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 1 1-.937 1.172L12 13.96zm0-6a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 1 1-.937 1.172L12 7.96z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(DirectionUp1);
export default ForwardRef;
