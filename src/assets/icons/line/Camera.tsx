import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Camera = (
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
      d="M10.07 3.75a1.25 1.25 0 0 0-1.04.557L7.624 6.416A.75.75 0 0 1 7 6.75H6A3.25 3.25 0 0 0 2.75 10v7A3.25 3.25 0 0 0 6 20.25h12A3.25 3.25 0 0 0 21.25 17v-7A3.25 3.25 0 0 0 18 6.75h-1a.75.75 0 0 1-.624-.334l-1.406-2.11a1.25 1.25 0 0 0-1.04-.556zm-2.288-.275A2.75 2.75 0 0 1 10.07 2.25h3.86c.92 0 1.778.46 2.288 1.225L17.4 5.25H18A4.75 4.75 0 0 1 22.75 10v7A4.75 4.75 0 0 1 18 21.75H6A4.75 4.75 0 0 1 1.25 17v-7A4.75 4.75 0 0 1 6 5.25h.599zM12 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 13.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
const ForwardRef = forwardRef(Camera);
export default ForwardRef;
