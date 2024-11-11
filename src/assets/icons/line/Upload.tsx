import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Upload = (
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
      d="M8.47 6.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V15a.75.75 0 0 1-1.5 0V4.81L9.53 6.53a.75.75 0 0 1-1.06 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 21.75A4.75 4.75 0 0 1 2.25 17v-4A4.75 4.75 0 0 1 7 8.25h.5a.75.75 0 0 1 0 1.5H7A3.25 3.25 0 0 0 3.75 13v4A3.25 3.25 0 0 0 7 20.25h10A3.25 3.25 0 0 0 20.25 17v-4A3.25 3.25 0 0 0 17 9.75h-.5a.75.75 0 0 1 0-1.5h.5A4.75 4.75 0 0 1 21.75 13v4A4.75 4.75 0 0 1 17 21.75z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Upload);
export default ForwardRef;
