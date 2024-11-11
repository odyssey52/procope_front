import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNotesCheck = (
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
      d="M8 1.25a.75.75 0 0 1 .75.75v.75h6.5V2a.75.75 0 0 1 1.5 0v.75H17a4.75 4.75 0 0 1 4.75 4.75V18A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18V7.5A4.75 4.75 0 0 1 7 2.75h.25V2A.75.75 0 0 1 8 1.25m-.75 3H7A3.25 3.25 0 0 0 3.75 7.5V18A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18V7.5A3.25 3.25 0 0 0 17 4.25h-.25V5a.75.75 0 0 1-1.5 0v-.75h-6.5V5a.75.75 0 0 1-1.5 0zm8.244 6.186a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNotesCheck);
export default ForwardRef;
