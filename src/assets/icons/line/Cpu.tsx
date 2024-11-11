import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCpu = (
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
      d="M10 1.25a.75.75 0 0 1 .75.75v1.25h2.5V2a.75.75 0 0 1 1.5 0v1.25H16A4.75 4.75 0 0 1 20.75 8v1.25H22a.75.75 0 0 1 0 1.5h-1.25v2.5H22a.75.75 0 0 1 0 1.5h-1.25V16A4.75 4.75 0 0 1 16 20.75h-1.25V22a.75.75 0 0 1-1.5 0v-1.25h-2.5V22a.75.75 0 0 1-1.5 0v-1.25H8A4.75 4.75 0 0 1 3.25 16v-1.25H2a.75.75 0 0 1 0-1.5h1.25v-2.5H2a.75.75 0 0 1 0-1.5h1.25V8A4.75 4.75 0 0 1 8 3.25h1.25V2a.75.75 0 0 1 .75-.75m-2 3.5A3.25 3.25 0 0 0 4.75 8v8A3.25 3.25 0 0 0 8 19.25h8A3.25 3.25 0 0 0 19.25 16V8A3.25 3.25 0 0 0 16 4.75zM8.25 11A2.75 2.75 0 0 1 11 8.25h2A2.75 2.75 0 0 1 15.75 11v2A2.75 2.75 0 0 1 13 15.75h-2A2.75 2.75 0 0 1 8.25 13zM11 9.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCpu);
export default ForwardRef;
