import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const FileMinus01 = (
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
      d="M7 2.75A3.25 3.25 0 0 0 3.75 6v12A3.25 3.25 0 0 0 7 21.25h4.343q.467 0 .907-.13V18A4.75 4.75 0 0 1 17 13.25h3.12q.13-.44.13-.907V6A3.25 3.25 0 0 0 17 2.75zm12.19 12H17A3.25 3.25 0 0 0 13.75 18v2.19zM2.25 6A4.75 4.75 0 0 1 7 1.25h10A4.75 4.75 0 0 1 21.75 6v6.343c0 1.26-.5 2.468-1.391 3.359l-5.657 5.657a4.75 4.75 0 0 1-3.359 1.391H7A4.75 4.75 0 0 1 2.25 18zm6 3A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(FileMinus01);
export default ForwardRef;