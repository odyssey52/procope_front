import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const In = (
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
      d="M12.53 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H21a.75.75 0 0 0 0-1.5H10.81l1.72-1.72a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 7A4.75 4.75 0 0 1 7 2.25h4A4.75 4.75 0 0 1 15.75 7v.5a.75.75 0 0 1-1.5 0V7A3.25 3.25 0 0 0 11 3.75H7A3.25 3.25 0 0 0 3.75 7v10A3.25 3.25 0 0 0 7 20.25h4A3.25 3.25 0 0 0 14.25 17v-.5a.75.75 0 0 1 1.5 0v.5A4.75 4.75 0 0 1 11 21.75H7A4.75 4.75 0 0 1 2.25 17z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(In);
export default ForwardRef;
