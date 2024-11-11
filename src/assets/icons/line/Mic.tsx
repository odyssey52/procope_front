import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Mic = (
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
      d="M6.25 7a5.75 5.75 0 1 1 11.5 0v7a5.75 5.75 0 0 1-11.5 0zM12 2.75A4.25 4.25 0 0 0 7.75 7v7a4.25 4.25 0 0 0 8.5 0v-.25H13a.75.75 0 0 1 0-1.5h3.25v-3.5H13a.75.75 0 0 1 0-1.5h3.25V7A4.25 4.25 0 0 0 12 2.75m-8 8.5a.75.75 0 0 1 .75.75v2a7.25 7.25 0 1 0 14.5 0v-2a.75.75 0 0 1 1.5 0v2a8.75 8.75 0 1 1-17.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Mic);
export default ForwardRef;
