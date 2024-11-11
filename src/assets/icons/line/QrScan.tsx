import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgQrScan = (
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
      d="M7 5.75c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V7A2.75 2.75 0 0 1 7 4.25h10A2.75 2.75 0 0 1 19.75 7v1a.75.75 0 0 1-1.5 0V7c0-.69-.56-1.25-1.25-1.25zM17 18.25c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17v-1a.75.75 0 0 1 1.5 0v1c0 .69.56 1.25 1.25 1.25zM1.25 12a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgQrScan);
export default ForwardRef;
