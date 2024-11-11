import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUserCircle = (
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
      d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 2.421.93 4.625 2.453 6.274A7.75 7.75 0 0 1 12 14.25c2.93 0 5.48 1.626 6.797 4.024A9.22 9.22 0 0 0 21.25 12 9.25 9.25 0 0 0 12 2.75m5.65 16.574a6.251 6.251 0 0 0-11.3 0A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.65-1.926M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 3.24-1.434 6.145-3.699 8.115A10.7 10.7 0 0 1 12 22.75c-2.697 0-5.164-.994-7.051-2.635A10.73 10.73 0 0 1 1.25 12M12 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircle);
export default ForwardRef;
