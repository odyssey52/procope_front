import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const NotificationOn = (
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
      d="M17 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m-1.437-1.042a.75.75 0 0 1-.63.853c-2.463.372-4.457 2.414-4.758 5.067l-.345 3.045a4.57 4.57 0 0 1-1.053 2.443c-.648.762-.083 1.884.803 1.884h12.34c.887 0 1.451-1.122.803-1.884a4.57 4.57 0 0 1-1.053-2.443l-.228-2.012a.75.75 0 0 1 1.49-.169l.229 2.012c.069.61.316 1.182.705 1.64 1.42 1.67.306 4.356-1.946 4.356H5.83c-2.251 0-3.365-2.685-1.946-4.356.39-.458.637-1.03.706-1.64l.345-3.044c.374-3.31 2.872-5.906 6.025-6.382a.75.75 0 0 1 .853.63m-3.076 15.34a.75.75 0 0 1 .966.439c.322.86 1.213 1.513 2.297 1.513s1.975-.652 2.298-1.513a.75.75 0 1 1 1.405.526c-.551 1.47-2.017 2.487-3.703 2.487s-3.151-1.017-3.702-2.487a.75.75 0 0 1 .439-.965"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(NotificationOn);
export default ForwardRef;
