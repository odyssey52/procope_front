import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const FolderRemove = (
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
      d="M6 3.75A3.25 3.25 0 0 0 2.75 7v10A3.25 3.25 0 0 0 6 20.25h12A3.25 3.25 0 0 0 21.25 17v-7A3.25 3.25 0 0 0 18 6.75h-2.667a4.75 4.75 0 0 1-2.85-.95l-1.866-1.4a3.25 3.25 0 0 0-1.95-.65zM1.25 7A4.75 4.75 0 0 1 6 2.25h2.667a4.75 4.75 0 0 1 2.85.95l1.866 1.4a3.25 3.25 0 0 0 1.95.65H18A4.75 4.75 0 0 1 22.75 10v7A4.75 4.75 0 0 1 18 21.75H6A4.75 4.75 0 0 1 1.25 17zm8.098 3.348a.75.75 0 0 1 1.061 0L12 11.94l1.591-1.59a.75.75 0 0 1 1.06 1.06L13.062 13l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06L10.938 13l-1.59-1.591a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderRemove);
export default ForwardRef;
