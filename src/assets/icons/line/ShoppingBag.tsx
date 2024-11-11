import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ShoppingBag = (
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
      d="M7.293 5.362a4.75 4.75 0 0 1 9.415 0 4.75 4.75 0 0 1 3.641 3.763l1.5 8a4.75 4.75 0 0 1-4.669 5.625H6.82a4.75 4.75 0 0 1-4.669-5.625l1.5-8a4.75 4.75 0 0 1 3.642-3.763m1.544-.112h6.326a3.251 3.251 0 0 0-6.326 0m-.517 1.5a3.25 3.25 0 0 0-3.195 2.651l-1.5 8A3.25 3.25 0 0 0 6.82 21.25h10.36a3.25 3.25 0 0 0 3.195-3.849l-1.5-8A3.25 3.25 0 0 0 15.68 6.75z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag);
export default ForwardRef;
