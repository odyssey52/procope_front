import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFile = (
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
      d="M1.25 5A3.75 3.75 0 0 1 5 1.25h10A3.75 3.75 0 0 1 18.75 5v2.25H20A2.75 2.75 0 0 1 22.75 10v10A2.75 2.75 0 0 1 20 22.75H5A3.75 3.75 0 0 1 1.25 19zM20 21.25c.69 0 1.25-.56 1.25-1.25V10c0-.69-.56-1.25-1.25-1.25h-1.25V20c0 .69.56 1.25 1.25 1.25m-2.45 0H5A2.25 2.25 0 0 1 2.75 19V5A2.25 2.25 0 0 1 5 2.75h10A2.25 2.25 0 0 1 17.25 5v15c0 .45.108.875.3 1.25M5.25 7A.75.75 0 0 1 6 6.25h8a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 7m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
