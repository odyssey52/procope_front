import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ZoomIn = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5303 3.46967C20.8232 3.76256 20.8232 4.23744 20.5303 4.53033L14.8107 10.25H18C18.4142 10.25 18.75 10.5858 18.75 11C18.75 11.4142 18.4142 11.75 18 11.75H13C12.5858 11.75 12.25 11.4142 12.25 11V6C12.25 5.58579 12.5858 5.25 13 5.25C13.4142 5.25 13.75 5.58579 13.75 6V9.18934L19.4697 3.46967C19.7626 3.17678 20.2374 3.17678 20.5303 3.46967ZM6 13.75C5.58579 13.75 5.25 13.4142 5.25 13C5.25 12.5858 5.58579 12.25 6 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13V18C11.75 18.4142 11.4142 18.75 11 18.75C10.5858 18.75 10.25 18.4142 10.25 18V14.8107L4.53033 20.5303C4.23744 20.8232 3.76256 20.8232 3.46967 20.5303C3.17678 20.2374 3.17678 19.7626 3.46967 19.4697L9.18934 13.75H6Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomIn);
export default ForwardRef;
