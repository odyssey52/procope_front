import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const RotateLock = (
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
      d="M12 7.75c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V9a2.75 2.75 0 1 1 5.5 0v1a.75.75 0 0 1-1.5 0V9c0-.69-.56-1.25-1.25-1.25"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 12A2.75 2.75 0 0 1 10 9.25h4A2.75 2.75 0 0 1 16.75 12v2A2.75 2.75 0 0 1 14 16.75h-4A2.75 2.75 0 0 1 7.25 14zM10 10.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 8.289 13.36.75.75 0 1 1 1.343.668A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 12 2.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.289 10.763a.75.75 0 0 1 .948-.475l3 1a.75.75 0 0 1-.474 1.423l-3-1a.75.75 0 0 1-.474-.948"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(RotateLock);
export default ForwardRef;
