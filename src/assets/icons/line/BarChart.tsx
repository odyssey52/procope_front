import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const BarChart = (
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
      d="M20 3.75c-.69 0-1.25.56-1.25 1.25v14a1.25 1.25 0 1 0 2.5 0V5c0-.69-.56-1.25-1.25-1.25M17.25 5a2.75 2.75 0 1 1 5.5 0v14a2.75 2.75 0 1 1-5.5 0zM12 7.75c-.69 0-1.25.56-1.25 1.25v10a1.25 1.25 0 1 0 2.5 0V9c0-.69-.56-1.25-1.25-1.25M9.25 9a2.75 2.75 0 1 1 5.5 0v10a2.75 2.75 0 1 1-5.5 0zM4 11.75c-.69 0-1.25.56-1.25 1.25v6a1.25 1.25 0 1 0 2.5 0v-6c0-.69-.56-1.25-1.25-1.25M1.25 13a2.75 2.75 0 1 1 5.5 0v6a2.75 2.75 0 1 1-5.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart);
export default ForwardRef;
