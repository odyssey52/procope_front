import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPackagingMinus = (
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
      d="M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.213 3.033a4.75 4.75 0 0 1 3.71-1.783h8.155a4.75 4.75 0 0 1 3.709 1.783l1.922 2.403a4.75 4.75 0 0 1 1.041 2.967V18A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18V8.403a4.75 4.75 0 0 1 1.04-2.967zm3.71-.283a3.25 3.25 0 0 0-2.538 1.22L3.462 6.373a3.25 3.25 0 0 0-.712 2.03V18A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18V8.403a3.25 3.25 0 0 0-.712-2.03L18.615 3.97a3.25 3.25 0 0 0-2.537-1.22z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 7A.75.75 0 0 1 3 6.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPackagingMinus);
export default ForwardRef;
