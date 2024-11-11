import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ZoomIn = (
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
      d="M20.53 3.47a.75.75 0 0 1 0 1.06l-5.72 5.72H18a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 1.5 0v3.19l5.72-5.72a.75.75 0 0 1 1.06 0M6 13.75a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-3.19l-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomIn);
export default ForwardRef;
