import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoney = (
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
      d="M1.25 8A4.75 4.75 0 0 1 6 3.25h12A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H6A4.75 4.75 0 0 1 1.25 16zM6 4.75A3.25 3.25 0 0 0 2.75 8v8A3.25 3.25 0 0 0 6 19.25h12A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75zM4.25 7A.75.75 0 0 1 5 6.25h2a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 7m12 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-5 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m12 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMoney);
export default ForwardRef;
