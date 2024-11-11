import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowSort = (
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
      d="M7.47 5.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8.75 7.81V18a.75.75 0 0 1-1.5 0V7.81L5.53 9.53a.75.75 0 0 1-1.06-1.06zM16.53 18.53a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6a.75.75 0 0 1 1.5 0v10.19l1.72-1.72a.75.75 0 1 1 1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowSort);
export default ForwardRef;
