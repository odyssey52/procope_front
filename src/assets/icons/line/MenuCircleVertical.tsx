import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMenuCircleVertical = (
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
      d="M16.75 13.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M11.75 13.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M6.75 13.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuCircleVertical);
export default ForwardRef;
