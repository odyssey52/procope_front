import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const CameraOff = (
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
      d="M1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-1.303-1.302A4.7 4.7 0 0 1 18 21.75H6A4.75 4.75 0 0 1 1.25 17v-7a4.75 4.75 0 0 1 3.199-4.49l-2.98-2.98a.75.75 0 0 1 0-1.06m4.233 5.293A3.25 3.25 0 0 0 2.75 10v7A3.25 3.25 0 0 0 6 20.25h12c.358 0 .703-.058 1.025-.165l-4.163-4.162a3.75 3.75 0 1 1-5.285-5.285zm4.94 4.941a2.25 2.25 0 1 0 3.152 3.152zM10.07 3.75a1.25 1.25 0 0 0-1.04.557l-.624-.416.624.416-.206.309a.75.75 0 0 1-1.248-.832l.206-.31A2.75 2.75 0 0 1 10.07 2.25h3.86c.92 0 1.778.46 2.288 1.225L17.4 5.25H18A4.75 4.75 0 0 1 22.75 10v7q0 .55-.12 1.067a.75.75 0 1 1-1.462-.336q.08-.352.082-.731v-7A3.25 3.25 0 0 0 18 6.75h-1a.75.75 0 0 1-.624-.334l-1.406-2.11a1.25 1.25 0 0 0-1.04-.556z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
const ForwardRef = forwardRef(CameraOff);
export default ForwardRef;
