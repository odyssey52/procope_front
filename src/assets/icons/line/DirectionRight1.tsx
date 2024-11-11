import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDirectionRight1 = (
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
      d="M6.414 7.469a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.937L10.04 12zm6 0a.75.75 0 1 1 1.172-.937l4 5a.75.75 0 0 1 0 .937l-4 5a.75.75 0 1 1-1.172-.937L16.04 12z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDirectionRight1);
export default ForwardRef;
