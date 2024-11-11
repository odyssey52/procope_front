import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNotepad = (
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
      d="M7.354 3.25a2.75 2.75 0 0 1 2.646-2h4c1.259 0 2.32.846 2.646 2H17A4.75 4.75 0 0 1 21.75 8v10A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18V8A4.75 4.75 0 0 1 7 3.25zm0 1.5H7A3.25 3.25 0 0 0 3.75 8v10A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18V8A3.25 3.25 0 0 0 17 4.75h-.354a2.75 2.75 0 0 1-2.646 2h-4a2.75 2.75 0 0 1-2.646-2m2.646-2a1.25 1.25 0 1 0 0 2.5h4a1.25 1.25 0 1 0 0-2.5zM7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNotepad);
export default ForwardRef;
