import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Notebook01 = (
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
      d="M3.309 5.25c.36-2.267 2.323-4 4.691-4h10A4.75 4.75 0 0 1 22.75 6v12A4.75 4.75 0 0 1 18 22.75H8a4.75 4.75 0 0 1-4.691-4H2a.75.75 0 0 1 0-1.5h1.25v-4.5H2a.75.75 0 0 1 0-1.5h1.25v-4.5H2a.75.75 0 0 1 0-1.5zm1.441 1.5H6a.75.75 0 0 0 0-1.5H4.837A3.25 3.25 0 0 1 8 2.75h10A3.25 3.25 0 0 1 21.25 6v12A3.25 3.25 0 0 1 18 21.25H8a3.25 3.25 0 0 1-3.163-2.5H6a.75.75 0 0 0 0-1.5H4.75v-4.5H6a.75.75 0 0 0 0-1.5H4.75zM9.25 6a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8A.75.75 0 0 1 9.25 6m0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Notebook01);
export default ForwardRef;
