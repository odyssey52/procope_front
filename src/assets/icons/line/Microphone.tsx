import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Microphone = (
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
      d="M7.25 6a4.75 4.75 0 0 1 9.5 0v6a4.75 4.75 0 1 1-9.5 0zM12 2.75A3.25 3.25 0 0 0 8.75 6v6a3.25 3.25 0 0 0 6.5 0V6A3.25 3.25 0 0 0 12 2.75m-7 7.5a.75.75 0 0 1 .75.75v1a6.25 6.25 0 1 0 12.5 0v-1a.75.75 0 0 1 1.5 0v1a7.75 7.75 0 0 1-7 7.714v1.536H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.536a7.75 7.75 0 0 1-7-7.714v-1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Microphone);
export default ForwardRef;
