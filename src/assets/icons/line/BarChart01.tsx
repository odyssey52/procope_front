import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const BarChart01 = (
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
      d="M12 3.75c-.69 0-1.25.56-1.25 1.25v14a1.25 1.25 0 1 0 2.5 0V5c0-.69-.56-1.25-1.25-1.25M9.25 5a2.75 2.75 0 1 1 5.5 0v14a2.75 2.75 0 1 1-5.5 0zM20 8.75c-.69 0-1.25.56-1.25 1.25v9a1.25 1.25 0 1 0 2.5 0v-9c0-.69-.56-1.25-1.25-1.25M17.25 10a2.75 2.75 0 1 1 5.5 0v9a2.75 2.75 0 1 1-5.5 0zM4 12.75c-.69 0-1.25.56-1.25 1.25v5a1.25 1.25 0 1 0 2.5 0v-5c0-.69-.56-1.25-1.25-1.25M1.25 14a2.75 2.75 0 1 1 5.5 0v5a2.75 2.75 0 1 1-5.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart01);
export default ForwardRef;
