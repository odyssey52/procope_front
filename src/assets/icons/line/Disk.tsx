import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Disk = (
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
      d="M6 2.75A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h.25V16A2.75 2.75 0 0 1 9 13.25h6A2.75 2.75 0 0 1 17.75 16v5.25H18A3.25 3.25 0 0 0 21.25 18V9.212a3.25 3.25 0 0 0-.952-2.298l-3.212-3.212a3.25 3.25 0 0 0-2.298-.952zm12 20A4.75 4.75 0 0 0 22.75 18V9.212c0-1.26-.5-2.468-1.391-3.358L18.146 2.64a4.75 4.75 0 0 0-3.358-1.391H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75zm-1.75-1.5V16c0-.69-.56-1.25-1.25-1.25H9c-.69 0-1.25.56-1.25 1.25v5.25zM8.25 7A.75.75 0 0 1 9 6.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 7"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Disk);
export default ForwardRef;
