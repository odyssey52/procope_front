import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Eye = (
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
      d="M12 5.75c-3.48 0-6.647 2.579-8.587 4.62a2.335 2.335 0 0 0 0 3.26c1.94 2.041 5.107 4.62 8.587 4.62s6.647-2.579 8.587-4.62c.884-.93.884-2.33 0-3.26C18.647 8.329 15.48 5.75 12 5.75M2.326 9.336C4.298 7.262 7.85 4.25 12 4.25s7.702 3.012 9.674 5.086a3.835 3.835 0 0 1 0 5.328C19.702 16.738 16.15 19.75 12 19.75s-7.702-3.012-9.674-5.086a3.835 3.835 0 0 1 0-5.328M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Eye);
export default ForwardRef;
