import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const FolderSearch01 = (
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
      d="M7 2.75A2.25 2.25 0 0 0 4.75 5v2.25h14.5V7A2.25 2.25 0 0 0 17 4.75h-2.802a3.75 3.75 0 0 1-2.305-.792l-.94-.733a2.25 2.25 0 0 0-1.384-.475zm13.75 4.509V7A3.75 3.75 0 0 0 17 3.25h-2.802a2.25 2.25 0 0 1-1.383-.475l-.94-.733a3.75 3.75 0 0 0-2.306-.792H7A3.75 3.75 0 0 0 3.25 5v2.259a2.75 2.75 0 0 0-2.465 3.317l1.804 8.42a4.75 4.75 0 0 0 4.645 3.754h9.533a4.75 4.75 0 0 0 4.644-3.755l1.804-8.419A2.75 2.75 0 0 0 20.75 7.26M3.474 8.75a1.25 1.25 0 0 0-1.222 1.512l1.804 8.419a3.25 3.25 0 0 0 3.178 2.569h9.533a3.25 3.25 0 0 0 3.177-2.569l1.805-8.42a1.25 1.25 0 0 0-1.223-1.511zm9.026 4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M9.25 14.5a3.25 3.25 0 1 1 1.544 2.767L9.531 18.53a.75.75 0 1 1-1.061-1.06l1.263-1.264A3.24 3.24 0 0 1 9.25 14.5"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderSearch01);
export default ForwardRef;
