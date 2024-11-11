import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Mouse = (
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
      d="M12 1.25a.75.75 0 0 1 .75.75v2.25H15A4.75 4.75 0 0 1 19.75 9v6a7.75 7.75 0 0 1-15.5 0V9A4.75 4.75 0 0 1 9 4.25h2.25V2a.75.75 0 0 1 .75-.75m-3 4.5A3.25 3.25 0 0 0 5.75 9v6a6.25 6.25 0 1 0 12.5 0V9A3.25 3.25 0 0 0 15 5.75zm3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Mouse);
export default ForwardRef;
