import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUserRectangle = (
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
      d="M12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5M8.25 9a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 6A4.75 4.75 0 0 1 6 1.25h12A4.75 4.75 0 0 1 22.75 6v12A4.75 4.75 0 0 1 18 22.75H6q-.614-.002-1.186-.15A4.75 4.75 0 0 1 1.25 18zM6 2.75A3.25 3.25 0 0 0 2.75 6v12c0 1.19.639 2.23 1.593 2.797a7.752 7.752 0 0 1 15.314 0A3.25 3.25 0 0 0 21.25 18V6A3.25 3.25 0 0 0 18 2.75zm12.205 18.494a6.251 6.251 0 0 0-12.41 0q.102.006.205.006h12q.103 0 .205-.006"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserRectangle);
export default ForwardRef;
