import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const AppsAdd = (
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
      d="M1.25 4A2.75 2.75 0 0 1 4 1.25h4A2.75 2.75 0 0 1 10.75 4v4A2.75 2.75 0 0 1 8 10.75H4A2.75 2.75 0 0 1 1.25 8zM4 2.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25zm14-1.5a.75.75 0 0 1 .75.75v3.25H22a.75.75 0 0 1 0 1.5h-3.25V10a.75.75 0 0 1-1.5 0V6.75H14a.75.75 0 0 1 0-1.5h3.25V2a.75.75 0 0 1 .75-.75M6 14.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M1.25 18a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m12-2A2.75 2.75 0 0 1 16 13.25h4A2.75 2.75 0 0 1 22.75 16v4A2.75 2.75 0 0 1 20 22.75h-4A2.75 2.75 0 0 1 13.25 20zM16 14.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(AppsAdd);
export default ForwardRef;
