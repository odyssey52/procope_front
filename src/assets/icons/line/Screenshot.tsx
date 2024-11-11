import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScreenshot = (
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
      d="M6.25 9A2.75 2.75 0 0 1 9 6.25h6A2.75 2.75 0 0 1 17.75 9v6A2.75 2.75 0 0 1 15 17.75H9A2.75 2.75 0 0 1 6.25 15zM9 7.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25zM2.25 5A2.75 2.75 0 0 1 5 2.25h4a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0zM21.75 19A2.75 2.75 0 0 1 19 21.75h-4a.75.75 0 0 1 0-1.5h4c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 0 1 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgScreenshot);
export default ForwardRef;
