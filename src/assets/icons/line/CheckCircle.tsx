import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCheckCircle = (
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
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5m4.46 5.658a.75.75 0 0 1 .132 1.052l-4.007 5.152a1.75 1.75 0 0 1-2.552.227l-2.535-2.282a.75.75 0 0 1 1.004-1.114l2.534 2.28a.25.25 0 0 0 .365-.032l4.007-5.151a.75.75 0 0 1 1.053-.132"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckCircle);
export default ForwardRef;
