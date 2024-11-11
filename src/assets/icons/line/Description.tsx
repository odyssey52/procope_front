import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDescription = (
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
      d="M7.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M7.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 2.75A3.25 3.25 0 0 0 3.75 6v12A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18V9.75H18A4.75 4.75 0 0 1 13.25 5V2.75zm7.75 1.06 4.44 4.44H18A3.25 3.25 0 0 1 14.75 5zM2.25 6A4.75 4.75 0 0 1 7 1.25h7a.75.75 0 0 1 .53.22l7 7c.141.14.22.331.22.53v9A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDescription);
export default ForwardRef;
