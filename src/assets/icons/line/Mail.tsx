import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Mail = (
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
      d="M1.25 7A4.75 4.75 0 0 1 6 2.25h12A4.75 4.75 0 0 1 22.75 7v10A4.75 4.75 0 0 1 18 21.75H6A4.75 4.75 0 0 1 1.25 17zM6 3.75A3.25 3.25 0 0 0 2.75 7v10A3.25 3.25 0 0 0 6 20.25h12A3.25 3.25 0 0 0 21.25 17V7A3.25 3.25 0 0 0 18 3.75zm-.624 3.834a.75.75 0 0 1 1.04-.208l3.781 2.52a3.25 3.25 0 0 0 3.606 0l3.781-2.52a.75.75 0 1 1 .832 1.248l-3.781 2.52a4.75 4.75 0 0 1-5.27 0l-3.781-2.52a.75.75 0 0 1-.208-1.04"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Mail);
export default ForwardRef;
