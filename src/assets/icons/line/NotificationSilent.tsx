import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const NotificationSilent = (
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
      d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-3.78-3.78H5.83c-2.252 0-3.365-2.685-1.946-4.356.39-.458.636-1.03.706-1.64l.344-3.044a7.5 7.5 0 0 1 .573-2.142L2.47 3.53a.75.75 0 0 1 0-1.06m4.2 5.26q-.176.55-.245 1.148l-.345 3.045a4.57 4.57 0 0 1-1.053 2.443c-.648.762-.084 1.884.803 1.884h9.36zM12 3.75a5.47 5.47 0 0 0-3.295 1.105.75.75 0 0 1-.9-1.2A6.97 6.97 0 0 1 12 2.25c3.628 0 6.65 2.795 7.066 6.46l.345 3.044c.069.61.316 1.182.705 1.64.704.83.781 1.89.43 2.744a.75.75 0 0 1-1.387-.572c.159-.386.12-.841-.186-1.2a4.57 4.57 0 0 1-1.053-2.443l-.345-3.045C17.242 5.937 14.83 3.75 12 3.75M8.737 18.298a.75.75 0 0 1 .965.439c.323.86 1.213 1.513 2.298 1.513s1.975-.652 2.298-1.513a.75.75 0 1 1 1.404.526c-.55 1.47-2.017 2.487-3.702 2.487s-3.152-1.017-3.702-2.487a.75.75 0 0 1 .439-.965"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(NotificationSilent);
export default ForwardRef;
