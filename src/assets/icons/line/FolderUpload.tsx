import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const FolderUpload = (
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
      d="M6 3.75A3.25 3.25 0 0 0 2.75 7v10A3.25 3.25 0 0 0 6 20.25h12A3.25 3.25 0 0 0 21.25 17v-7A3.25 3.25 0 0 0 18 6.75h-2.667a4.75 4.75 0 0 1-2.85-.95l-1.866-1.4a3.25 3.25 0 0 0-1.95-.65zM1.25 7A4.75 4.75 0 0 1 6 2.25h2.667a4.75 4.75 0 0 1 2.85.95l1.866 1.4a3.25 3.25 0 0 0 1.95.65H18A4.75 4.75 0 0 1 22.75 10v7A4.75 4.75 0 0 1 18 21.75H6A4.75 4.75 0 0 1 1.25 17zm10 4.828a1 1 0 0 0-.134.117L9.53 13.53a.75.75 0 0 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0l1.585 1.586a.75.75 0 1 1-1.06 1.06l-1.586-1.585a1 1 0 0 0-.134-.117V16a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderUpload);
export default ForwardRef;