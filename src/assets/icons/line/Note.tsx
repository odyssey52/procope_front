import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNote = (
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
      d="M6 20.25A3.25 3.25 0 0 1 2.75 17V7A3.25 3.25 0 0 1 6 3.75h12A3.25 3.25 0 0 1 21.25 7v6.25H19A4.75 4.75 0 0 0 14.25 18v2.25zm9.75-1.06 4.44-4.44H19A3.25 3.25 0 0 0 15.75 18zM1.25 17A4.75 4.75 0 0 0 6 21.75h9a.75.75 0 0 0 .53-.22l7-7a.75.75 0 0 0 .22-.53V7A4.75 4.75 0 0 0 18 2.25H6A4.75 4.75 0 0 0 1.25 7z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9M6.25 14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNote);
export default ForwardRef;
