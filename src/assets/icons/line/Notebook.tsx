import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Notebook = (
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
      d="M8 1.25a.75.75 0 0 1 .75.75v.75h6.5V2a.75.75 0 0 1 1.5 0v.75H17a4.75 4.75 0 0 1 4.75 4.75V18A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18V7.5A4.75 4.75 0 0 1 7 2.75h.25V2A.75.75 0 0 1 8 1.25m-.75 3H7A3.25 3.25 0 0 0 3.75 7.5V18A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18V7.5A3.25 3.25 0 0 0 17 4.25h-.25V5a.75.75 0 0 1-1.5 0v-.75h-6.5V5a.75.75 0 0 1-1.5 0zm0 4.75A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Notebook);
export default ForwardRef;
