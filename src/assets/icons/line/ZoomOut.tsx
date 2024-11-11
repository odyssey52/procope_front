import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ZoomOut = (
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
      d="M13.5 6.75a.75.75 0 0 1 0-1.5H18a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V7.81l-9.44 9.44h2.69a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l9.44-9.44z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomOut);
export default ForwardRef;
