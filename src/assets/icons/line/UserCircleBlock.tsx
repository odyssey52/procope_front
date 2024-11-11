import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const UserCircleBlock = (
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
      d="M11 14.75a8.2 8.2 0 0 0-3.995 1.03.75.75 0 0 1-.727-1.312A9.7 9.7 0 0 1 11 13.25q.55 0 1.082.06a.75.75 0 1 1-.164 1.49 8 8 0 0 0-.918-.05M11 10.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5M7.25 8a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 .993-.149 1.953-.425 2.857a4.75 4.75 0 1 1-6.468 6.468A9.8 9.8 0 0 1 11 20.75c-5.385 0-9.75-4.365-9.75-9.75m12.088 7.914a4.75 4.75 0 0 1 5.576-5.576 8.25 8.25 0 1 0-5.576 5.576M18 14.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.03 14.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(UserCircleBlock);
export default ForwardRef;
