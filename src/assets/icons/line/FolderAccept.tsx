import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFolderAccept = (
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
      d="M6 3.75A3.25 3.25 0 0 0 2.75 7v10A3.25 3.25 0 0 0 6 20.25h12A3.25 3.25 0 0 0 21.25 17v-7A3.25 3.25 0 0 0 18 6.75h-2.667a4.75 4.75 0 0 1-2.85-.95l-1.866-1.4a3.25 3.25 0 0 0-1.95-.65zM1.25 7A4.75 4.75 0 0 1 6 2.25h2.667a4.75 4.75 0 0 1 2.85.95l1.866 1.4a3.25 3.25 0 0 0 1.95.65H18A4.75 4.75 0 0 1 22.75 10v7A4.75 4.75 0 0 1 18 21.75H6A4.75 4.75 0 0 1 1.25 17zm14.244 3.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderAccept);
export default ForwardRef;
