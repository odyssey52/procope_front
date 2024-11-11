import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFileSharing = (
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
      d="M5 2.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V4.908c0-.36-.156-.704-.427-.941l-1.037-.908a1.25 1.25 0 0 0-.823-.309zM2.25 4A2.75 2.75 0 0 1 5 1.25h2.963c.666 0 1.31.242 1.81.68l1.038.908a2.75 2.75 0 0 1 .939 2.07V10A2.75 2.75 0 0 1 9 12.75H5A2.75 2.75 0 0 1 2.25 10zm10.5 2a.75.75 0 0 1 .75-.75H16A2.75 2.75 0 0 1 18.75 8v1.5a.75.75 0 0 1-1.5 0V8c0-.69-.56-1.25-1.25-1.25h-2.5a.75.75 0 0 1-.75-.75M15 12.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-5.092c0-.36-.156-.704-.427-.941l-1.037-.908a1.25 1.25 0 0 0-.823-.309zM12.25 14A2.75 2.75 0 0 1 15 11.25h2.963c.666 0 1.31.242 1.81.68l1.038.908a2.75 2.75 0 0 1 .939 2.07V20A2.75 2.75 0 0 1 19 22.75h-4A2.75 2.75 0 0 1 12.25 20zM6 13.75a.75.75 0 0 1 .75.75V16c0 .69.56 1.25 1.25 1.25h2.5a.75.75 0 0 1 0 1.5H8A2.75 2.75 0 0 1 5.25 16v-1.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFileSharing);
export default ForwardRef;
