import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Trophy = (
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
      d="M8 3.75c-.69 0-1.25.56-1.25 1.25v6a5.25 5.25 0 1 0 10.5 0V5c0-.69-.56-1.25-1.25-1.25zm10.716.817A2.75 2.75 0 0 0 16 2.25H8a2.75 2.75 0 0 0-2.716 2.317A2.75 2.75 0 0 0 1.25 7a4.75 4.75 0 0 0 4.036 4.697 6.75 6.75 0 0 0 5.964 6.012v2.541H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-2.541a6.75 6.75 0 0 0 5.965-6.012A4.75 4.75 0 0 0 22.75 7a2.75 2.75 0 0 0-4.034-2.433M18.75 7v3.163A3.25 3.25 0 0 0 21.25 7a1.25 1.25 0 1 0-2.5 0M5.25 7a1.25 1.25 0 1 0-2.5 0 3.25 3.25 0 0 0 2.5 3.163z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Trophy);
export default ForwardRef;
