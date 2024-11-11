import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const TaskCheck = (
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
      d="M20.25 18A3.25 3.25 0 0 1 17 21.25H7A3.25 3.25 0 0 1 3.75 18V6A3.25 3.25 0 0 1 7 2.75h5.343a3.25 3.25 0 0 1 2.298.952l4.657 4.657c.61.61.952 1.436.952 2.298zM17 22.75A4.75 4.75 0 0 0 21.75 18v-7.343c0-1.26-.5-2.468-1.391-3.359l-4.657-4.657a4.75 4.75 0 0 0-3.359-1.391H7A4.75 4.75 0 0 0 2.25 6v12A4.75 4.75 0 0 0 7 22.75z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 8.25h-3A3.25 3.25 0 0 1 14.75 5V2h-1.5v3A4.75 4.75 0 0 0 18 9.75h3zM15.494 11.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(TaskCheck);
export default ForwardRef;
