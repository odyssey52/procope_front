import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Trash = (
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
      d="M8.782 2.475A2.75 2.75 0 0 1 11.07 1.25h1.86c.92 0 1.778.46 2.288 1.225L16.4 4.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h4.599zm.62 1.775h5.197l-.63-.943a1.25 1.25 0 0 0-1.04-.557H11.07a1.25 1.25 0 0 0-1.04.557zM5 7.25a.75.75 0 0 1 .75.75v10A3.25 3.25 0 0 0 9 21.25h6A3.25 3.25 0 0 0 18.25 18V8a.75.75 0 0 1 1.5 0v10A4.75 4.75 0 0 1 15 22.75H9A4.75 4.75 0 0 1 4.25 18V8A.75.75 0 0 1 5 7.25m5 3a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Trash);
export default ForwardRef;
