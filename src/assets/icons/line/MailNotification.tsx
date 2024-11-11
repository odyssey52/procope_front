import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMailNotification = (
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
      d="M1.25 8A4.75 4.75 0 0 1 6 3.25h7.803a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 0 2.75 8v10A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18v-5.803a.75.75 0 0 1 1.5 0V18A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18zM19 4.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M15.25 7a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M5.376 8.584a.75.75 0 0 1 1.04-.208l3.781 2.52a3.25 3.25 0 0 0 3.606 0l.49-.326a.75.75 0 1 1 .832 1.248l-.49.327a4.75 4.75 0 0 1-5.27 0L5.584 9.624a.75.75 0 0 1-.208-1.04"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMailNotification);
export default ForwardRef;
