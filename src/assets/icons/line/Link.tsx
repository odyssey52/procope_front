import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLink = (
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
      d="M14.651 9.348a.75.75 0 0 1 0 1.061l-4.242 4.243a.75.75 0 0 1-1.06-1.061l4.242-4.243a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.137 5.864a3.964 3.964 0 0 0-5.607 0L10.865 7.53a.75.75 0 1 1-1.06-1.06l1.666-1.667a5.464 5.464 0 0 1 7.727 7.727l-1.666 1.667a.75.75 0 0 1-1.061-1.06l1.667-1.667a3.964 3.964 0 0 0 0-5.606M5.863 18.136a3.964 3.964 0 0 0 5.607 0l1.666-1.666a.75.75 0 0 1 1.06 1.06l-1.666 1.667a5.464 5.464 0 0 1-7.727-7.727L6.47 9.803a.75.75 0 0 1 1.06 1.06L5.863 12.53a3.964 3.964 0 0 0 0 5.606"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;
