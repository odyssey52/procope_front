import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLock = (
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
      d="M12 2.75A3.25 3.25 0 0 0 8.75 6v1.25h6.5V6A3.25 3.25 0 0 0 12 2.75m4.75 4.559V6a4.75 4.75 0 1 0-9.5 0v1.309c-2.267.36-4 2.323-4 4.691v6A4.75 4.75 0 0 0 8 22.75h8A4.75 4.75 0 0 0 20.75 18v-6a4.75 4.75 0 0 0-4-4.691M8 8.75A3.25 3.25 0 0 0 4.75 12v6A3.25 3.25 0 0 0 8 21.25h8A3.25 3.25 0 0 0 19.25 18v-6A3.25 3.25 0 0 0 16 8.75zm4 4.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;
