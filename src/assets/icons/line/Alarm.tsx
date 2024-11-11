import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Alarm = (
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
      d="M7.884 1.7a.75.75 0 0 1-.387.987c-1.99.87-3.681 2.301-4.872 4.093a.75.75 0 1 1-1.25-.83 12.8 12.8 0 0 1 5.521-4.637.75.75 0 0 1 .988.387m8.232 0a.75.75 0 0 1 .988-.387 12.8 12.8 0 0 1 5.52 4.636.75.75 0 1 1-1.248.83 11.3 11.3 0 0 0-4.873-4.092.75.75 0 0 1-.387-.987M12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 2.26-.77 4.341-2.06 5.995l1.91 2.556a.75.75 0 0 1-1.2.898l-1.74-2.327A9.72 9.72 0 0 1 12 22.75a9.72 9.72 0 0 1-6.66-2.628L3.6 22.449a.75.75 0 0 1-1.2-.898l1.91-2.556A9.7 9.7 0 0 1 2.25 13M12 7.25a.75.75 0 0 1 .75.75v4.599l2.666 1.777a.75.75 0 1 1-.832 1.248l-3-2A.75.75 0 0 1 11.25 13V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Alarm);
export default ForwardRef;
