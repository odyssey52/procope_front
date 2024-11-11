import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Hotspot = (
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
      d="M12 12.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 14a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 4.75A9.25 9.25 0 0 0 2.75 14a9.22 9.22 0 0 0 2.71 6.54.75.75 0 0 1-1.061 1.061A10.72 10.72 0 0 1 1.25 14C1.25 8.063 6.063 3.25 12 3.25S22.75 8.063 22.75 14c0 2.968-1.204 5.657-3.149 7.601a.75.75 0 0 1-1.06-1.06A9.22 9.22 0 0 0 21.25 14 9.25 9.25 0 0 0 12 4.75m0 4a5.25 5.25 0 0 0-3.712 8.962.75.75 0 0 1-1.061 1.061 6.75 6.75 0 1 1 9.546 0 .75.75 0 0 1-1.06-1.06A5.25 5.25 0 0 0 12 8.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Hotspot);
export default ForwardRef;
