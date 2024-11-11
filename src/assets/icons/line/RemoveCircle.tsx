import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const RemoveCircle = (
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
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M8.641 8.641a.75.75 0 0 1 1.06 0L12 10.94l2.298-2.298a.75.75 0 0 1 1.06 1.06L13.062 12l2.298 2.298a.75.75 0 0 1-1.06 1.06L12 13.062l-2.298 2.298a.75.75 0 1 1-1.06-1.06L10.938 12 8.641 9.702a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(RemoveCircle);
export default ForwardRef;
