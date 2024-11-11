import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoneyDollar = (
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
      d="M1.25 8A4.75 4.75 0 0 1 6 3.25h12A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H6A4.75 4.75 0 0 1 1.25 16zM6 4.75A3.25 3.25 0 0 0 2.75 8v8A3.25 3.25 0 0 0 6 19.25h12A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 11.25A1.25 1.25 0 1 1 13.25 10a.75.75 0 0 0 1.5 0A2.75 2.75 0 1 0 12 12.75a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 15.25c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0A2.75 2.75 0 1 0 12 11.25a.75.75 0 0 0 0 1.5 1.25 1.25 0 1 1 0 2.5M12 5.75a.75.75 0 0 1 .75.75V8a.75.75 0 0 1-1.5 0V6.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 15.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V16a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMoneyDollar);
export default ForwardRef;
