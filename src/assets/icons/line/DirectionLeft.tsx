import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDirectionLeft = (
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
      d="M14.469 6.415a.75.75 0 0 1 .117 1.054L10.96 12l3.626 4.532a.75.75 0 0 1-1.172.937l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDirectionLeft);
export default ForwardRef;
