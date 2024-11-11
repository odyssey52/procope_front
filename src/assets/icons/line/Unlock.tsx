import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUnlock = (
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
      d="M12 2.75a3.25 3.25 0 0 0-2.816 1.626.75.75 0 1 1-1.298-.752A4.75 4.75 0 0 1 16.75 6v1.309c2.267.36 4 2.323 4 4.691v6A4.75 4.75 0 0 1 16 22.75H8A4.75 4.75 0 0 1 3.25 18v-6A4.75 4.75 0 0 1 8 7.25h7.25V6A3.25 3.25 0 0 0 12 2.75m-4 6A3.25 3.25 0 0 0 4.75 12v6A3.25 3.25 0 0 0 8 21.25h8A3.25 3.25 0 0 0 19.25 18v-6A3.25 3.25 0 0 0 16 8.75zm4 4.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUnlock);
export default ForwardRef;
