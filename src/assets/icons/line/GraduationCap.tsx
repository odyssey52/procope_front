import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const GraduationCap = (
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
      d="M12.559 6.118a1.25 1.25 0 0 0-1.118 0L3.677 10l7.764 3.882a1.25 1.25 0 0 0 1.118 0L20.323 10zM10.77 4.776a2.75 2.75 0 0 1 2.46 0l9.105 4.553a.75.75 0 0 1 0 1.342l-3.585 1.793V16A3.75 3.75 0 0 1 15 19.75H9A3.75 3.75 0 0 1 5.25 16v-3.536L1.665 10.67a.75.75 0 0 1 0-1.342zm-4.02 8.438V16A2.25 2.25 0 0 0 9 18.25h6A2.25 2.25 0 0 0 17.25 16v-2.786l-4.02 2.01a2.75 2.75 0 0 1-2.46 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 9.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(GraduationCap);
export default ForwardRef;
