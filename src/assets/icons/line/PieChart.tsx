import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const PieChart = (
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
      d="M11.25 4c0-1.467 1.235-2.87 2.886-2.538a10.76 10.76 0 0 1 8.402 8.403c.332 1.65-1.071 2.885-2.538 2.885h-6A2.75 2.75 0 0 1 11.25 10zm2.589-1.067c-.515-.104-1.089.325-1.089 1.067v6c0 .69.56 1.25 1.25 1.25h6c.742 0 1.171-.574 1.067-1.089a9.26 9.26 0 0 0-7.228-7.228"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.731 4.057a.75.75 0 0 1-.565.897 8.25 8.25 0 1 0 9.88 9.88.75.75 0 1 1 1.462.332c-.985 4.342-4.867 7.584-9.508 7.584-5.385 0-9.75-4.365-9.75-9.75 0-4.641 3.242-8.523 7.584-9.508a.75.75 0 0 1 .897.565"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart);
export default ForwardRef;
