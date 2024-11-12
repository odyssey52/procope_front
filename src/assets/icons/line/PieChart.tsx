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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 4.00001C11.25 2.53307 12.485 1.12949 14.1355 1.46226C18.36 2.31404 21.686 5.63999 22.5378 9.86454C22.8705 11.515 21.4669 12.75 20 12.75H14C12.4812 12.75 11.25 11.5188 11.25 10V4.00001ZM13.839 2.93267C13.3239 2.8288 12.75 3.2578 12.75 4.00001V10C12.75 10.6904 13.3096 11.25 14 11.25H20C20.7422 11.25 21.1712 10.6761 21.0673 10.161C20.3349 6.5284 17.4716 3.6651 13.839 2.93267Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.73141 4.05704C9.82307 4.46098 9.56991 4.86275 9.16597 4.95441C5.4921 5.78805 2.75 9.07469 2.75 13C2.75 17.5563 6.44365 21.25 11 21.25C14.9253 21.25 18.2119 18.5079 19.0456 14.834C19.1372 14.4301 19.539 14.1769 19.9429 14.2686C20.3469 14.3602 20.6 14.762 20.5084 15.166C19.5231 19.508 15.6411 22.75 11 22.75C5.61522 22.75 1.25 18.3848 1.25 13C1.25 8.35893 4.49195 4.47687 8.83403 3.4916C9.23798 3.39994 9.63975 3.65309 9.73141 4.05704Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart);
export default ForwardRef;
