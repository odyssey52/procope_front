import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgShare = (
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
      d="M18.5 2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M14.25 5.5a4.25 4.25 0 1 1 .844 2.542L9.578 10.8a4.25 4.25 0 0 1 0 2.4l5.516 2.758a4.25 4.25 0 1 1-.671 1.341l-5.517-2.757a4.25 4.25 0 1 1 0-5.083L14.422 6.7a4.3 4.3 0 0 1-.172-1.2M5.5 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m13 6.5a2.75 2.75 0 1 0-.002 5.5 2.75 2.75 0 0 0 .002-5.5"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
