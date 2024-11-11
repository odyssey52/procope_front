import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgRedo = (
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
      d="M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25a9.72 9.72 0 0 1 7.046 3.01V3a.75.75 0 1 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.421a.75.75 0 0 1 0-1.5h2.99a8.23 8.23 0 0 0-6.365-3"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
