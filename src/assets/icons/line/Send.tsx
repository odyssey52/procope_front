import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Send = (
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
      d="M2.152 7.778C.13 5.644 1.722 2.25 4.612 2.25H19.39c2.758 0 4.39 3.128 2.643 5.317L11.726 20.482c-1.94 2.43-6 1.143-6-2.027v-6.208c.001-.444-.17-.875-.485-1.207zm2.46-4.028c-1.654 0-2.431 1.877-1.371 2.997l3.09 3.262c.574.606.896 1.405.896 2.238v6.208c0 1.667 2.22 2.48 3.326 1.092L20.86 6.63c.916-1.147.108-2.881-1.47-2.881z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Send);
export default ForwardRef;
