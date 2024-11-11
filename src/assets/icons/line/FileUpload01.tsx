import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFileUpload01 = (
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
      d="M7 2.75A3.25 3.25 0 0 0 3.75 6v12A3.25 3.25 0 0 0 7 21.25h4.343q.467 0 .907-.13V18A4.75 4.75 0 0 1 17 13.25h3.12q.13-.44.13-.907V6A3.25 3.25 0 0 0 17 2.75zm12.19 12H17A3.25 3.25 0 0 0 13.75 18v2.19zM2.25 6A4.75 4.75 0 0 1 7 1.25h10A4.75 4.75 0 0 1 21.75 6v6.343c0 1.26-.5 2.468-1.391 3.359l-5.657 5.657a4.75 4.75 0 0 1-3.359 1.391H7A4.75 4.75 0 0 1 2.25 18zm9 1.828a1 1 0 0 0-.134.117L9.53 9.53a.75.75 0 0 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L15.53 8.47a.75.75 0 0 1-1.06 1.06l-1.586-1.585a1 1 0 0 0-.134-.117V12a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFileUpload01);
export default ForwardRef;
