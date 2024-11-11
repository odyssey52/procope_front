import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgRemove = (
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
      d="M7.227 7.227a.75.75 0 0 1 1.06 0L12 10.939l3.712-3.712a.75.75 0 1 1 1.06 1.06L13.062 12l3.712 3.712a.75.75 0 1 1-1.06 1.06L12 13.062l-3.712 3.712a.75.75 0 1 1-1.061-1.06L10.939 12 7.227 8.288a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRemove);
export default ForwardRef;
