import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWarningError = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size} ref={ref} {...props}>
    <path fill="currentColor" d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.316 3.795c1.174-2.06 4.194-2.06 5.368 0l7.672 13.466c1.162 2.04-.369 4.489-2.684 4.489H4.328c-2.315 0-3.845-2.45-2.684-4.489zm4.064.742c-.598-1.05-2.162-1.05-2.76 0L2.948 18.004c-.56.982.15 2.246 1.38 2.246h15.344c1.23 0 1.94-1.264 1.38-2.246zM12 8.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningError);
export default ForwardRef;
