import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgRepeat = (
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
      d="M16.47 4.47a.75.75 0 0 1 1.06 0l1.293 1.293a1.75 1.75 0 0 1 0 2.474L17.53 9.53a.75.75 0 0 1-1.06-1.06l.72-.72H10A3.25 3.25 0 0 0 6.75 11v1a.75.75 0 0 1-1.5 0v-1A4.75 4.75 0 0 1 10 6.25h7.19l-.72-.72a.75.75 0 0 1 0-1.06M18 11.25a.75.75 0 0 1 .75.75v1A4.75 4.75 0 0 1 14 17.75H6.81l.72.72a.75.75 0 1 1-1.06 1.06l-1.293-1.293a1.75 1.75 0 0 1 0-2.474L6.47 14.47a.75.75 0 0 1 1.06 1.06l-.72.72H14A3.25 3.25 0 0 0 17.25 13v-1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRepeat);
export default ForwardRef;
