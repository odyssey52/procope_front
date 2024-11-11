import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgReceipt = (
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
      d="M6.25 7A.75.75 0 0 1 7 6.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 7M6.25 11a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M6.25 15a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 4A2.75 2.75 0 0 1 5 1.25h14A2.75 2.75 0 0 1 21.75 4v15.154a2.75 2.75 0 0 1-3.681 2.588l-1.562-.562a1.25 1.25 0 0 0-.937.036l-2.441 1.099a2.75 2.75 0 0 1-2.258 0l-2.441-1.1a1.25 1.25 0 0 0-.937-.035l-1.562.562a2.75 2.75 0 0 1-3.681-2.588zM5 2.75c-.69 0-1.25.56-1.25 1.25v15.154c0 .866.859 1.47 1.673 1.177l1.562-.563a2.75 2.75 0 0 1 2.06.08l2.442 1.099c.326.146.7.146 1.026 0l2.442-1.1a2.75 2.75 0 0 1 2.06-.079l1.562.563a1.25 1.25 0 0 0 1.673-1.177V4c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgReceipt);
export default ForwardRef;
