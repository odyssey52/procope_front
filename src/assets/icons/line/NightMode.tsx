import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNightMode = (
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
      d="M10.056 2.47a.75.75 0 0 1 .187.748 8.447 8.447 0 0 0 10.54 10.54.75.75 0 0 1 .935.934c-1.238 4.084-5.031 7.058-9.521 7.058-5.494 0-9.947-4.453-9.947-9.947 0-4.49 2.974-8.283 7.058-9.52a.75.75 0 0 1 .748.187M8.488 4.212a8.447 8.447 0 1 0 11.3 11.3q-.715.106-1.46.107c-5.493 0-9.947-4.454-9.947-9.947q.001-.745.107-1.46"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNightMode);
export default ForwardRef;
