import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgListViewRectangle = (
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
      d="M1.25 7c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 5 10.75H3A1.75 1.75 0 0 1 1.25 9zM3 6.75a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h2A.25.25 0 0 0 5.25 9V7A.25.25 0 0 0 5 6.75zM9.25 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 9.25 6m0 4a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75m-8 5c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 5 18.75H3A1.75 1.75 0 0 1 1.25 17zM3 14.75a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h2a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25zM9.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgListViewRectangle);
export default ForwardRef;
