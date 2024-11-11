import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowTransfer = (
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
      d="M18.53 7.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H6a.75.75 0 0 1 0-1.5h10.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06zM5.47 16.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72H18a.75.75 0 0 1 0 1.5H7.81l1.72 1.72a.75.75 0 1 1-1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowTransfer);
export default ForwardRef;
