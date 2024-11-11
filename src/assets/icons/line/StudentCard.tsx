import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStudentCard = (
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
      d="M9.25 4a2.75 2.75 0 1 1 5.5 0v1.25H19A3.75 3.75 0 0 1 22.75 9v10A3.75 3.75 0 0 1 19 22.75H5A3.75 3.75 0 0 1 1.25 19V9A3.75 3.75 0 0 1 5 5.25h4.25zm1.5 1.25h2.5V4a1.25 1.25 0 1 0-2.5 0zM5 6.75A2.25 2.25 0 0 0 2.75 9v10A2.25 2.25 0 0 0 5 21.25h14A2.25 2.25 0 0 0 21.25 19V9A2.25 2.25 0 0 0 19 6.75zm4 4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.035 3.1a2.75 2.75 0 1 0-4.07 0A3.75 3.75 0 0 0 5.25 17c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 12.75 17c0-1.32-.683-2.482-1.715-3.15M9 14.75A2.25 2.25 0 0 0 6.75 17c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25A2.25 2.25 0 0 0 9 14.75M14.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgStudentCard);
export default ForwardRef;
