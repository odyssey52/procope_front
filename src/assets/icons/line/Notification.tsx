import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNotification = (
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
      d="M12 3.75c-2.83 0-5.242 2.187-5.575 5.128l-.345 3.045a4.57 4.57 0 0 1-1.053 2.443c-.648.762-.083 1.884.803 1.884h12.34c.887 0 1.451-1.122.803-1.884a4.57 4.57 0 0 1-1.053-2.443l-.345-3.045C17.242 5.937 14.831 3.75 12 3.75M4.935 8.71C5.35 5.045 8.372 2.25 12 2.25s6.65 2.795 7.066 6.46l.345 3.044c.069.61.316 1.182.705 1.64 1.42 1.67.306 4.356-1.946 4.356H5.83c-2.251 0-3.365-2.685-1.946-4.356.39-.458.637-1.03.706-1.64zm3.802 9.588a.75.75 0 0 1 .966.439c.322.86 1.213 1.513 2.297 1.513s1.975-.652 2.298-1.513a.75.75 0 1 1 1.405.526c-.551 1.47-2.017 2.487-3.703 2.487s-3.151-1.017-3.702-2.487a.75.75 0 0 1 .439-.965"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNotification);
export default ForwardRef;
