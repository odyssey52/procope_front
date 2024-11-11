import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const MenuCircleVertical01 = (
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
      d="M13.5 7.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M13.5 12.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M13.5 17.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
  </svg>
);
const ForwardRef = forwardRef(MenuCircleVertical01);
export default ForwardRef;
