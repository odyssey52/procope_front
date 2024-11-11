import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgImageRectangle = (
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
      d="M1.25 6A4.75 4.75 0 0 1 6 1.25h12A4.75 4.75 0 0 1 22.75 6v12A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18V6m1.5 9.464V18A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18v-3.616l-2.627-1.891a3.25 3.25 0 0 0-4.073.221l-4.096 3.687a4.75 4.75 0 0 1-5.953.324zm18.5-2.928-1.75-1.26a4.75 4.75 0 0 0-5.954.323L9.45 15.286a3.25 3.25 0 0 1-4.073.221L2.75 13.616V6A3.25 3.25 0 0 1 6 2.75h12A3.25 3.25 0 0 1 21.25 6zM8.5 6.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.25 8.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgImageRectangle);
export default ForwardRef;
