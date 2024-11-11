import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCopy = (
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
      d="M7.25 6A4.75 4.75 0 0 1 12 1.25h6A4.75 4.75 0 0 1 22.75 6v6A4.75 4.75 0 0 1 18 16.75h-1.25V18A4.75 4.75 0 0 1 12 22.75H6A4.75 4.75 0 0 1 1.25 18v-6A4.75 4.75 0 0 1 6 7.25h1.25zm1.5 1.25H12A4.75 4.75 0 0 1 16.75 12v3.25H18A3.25 3.25 0 0 0 21.25 12V6A3.25 3.25 0 0 0 18 2.75h-6A3.25 3.25 0 0 0 8.75 6zM6 8.75A3.25 3.25 0 0 0 2.75 12v6A3.25 3.25 0 0 0 6 21.25h6A3.25 3.25 0 0 0 15.25 18v-6A3.25 3.25 0 0 0 12 8.75z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCopy);
export default ForwardRef;
