import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUserCircleMinus = (
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
      d="M10.87 14.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.613-1.368c1.52-.681 2.804-1.062 4.171-1.066 1.361-.004 2.73.367 4.419 1.056a.75.75 0 0 1-.567 1.388c-1.612-.657-2.77-.947-3.848-.944M11 10.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5M7.25 8a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 1.24-.232 2.428-.655 3.521a.75.75 0 1 1-1.4-.542 8.25 8.25 0 1 0-5.862 5.067.75.75 0 1 1 .333 1.462A9.8 9.8 0 0 1 11 20.75c-5.385 0-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.75 18a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircleMinus);
export default ForwardRef;
