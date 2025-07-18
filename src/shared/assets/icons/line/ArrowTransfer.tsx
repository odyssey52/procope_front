import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ArrowTransfer = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M18.5303 7.46967C18.8232 7.76256 18.8232 8.23744 18.5303 8.53033L15.5303 11.5303C15.2374 11.8232 14.7626 11.8232 14.4697 11.5303C14.1768 11.2374 14.1768 10.7626 14.4697 10.4697L16.1893 8.75L6 8.75C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25L16.1893 7.25L14.4697 5.53033C14.1768 5.23744 14.1768 4.76256 14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967L18.5303 7.46967Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46967 16.5303C5.17678 16.2374 5.17678 15.7626 5.46967 15.4697L8.46967 12.4697C8.76256 12.1768 9.23744 12.1768 9.53033 12.4697C9.82322 12.7626 9.82322 13.2374 9.53033 13.5303L7.81066 15.25L18 15.25C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75L7.81066 16.75L9.53033 18.4697C9.82322 18.7626 9.82322 19.2374 9.53033 19.5303C9.23744 19.8232 8.76256 19.8232 8.46967 19.5303L5.46967 16.5303Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowTransfer);
export default ForwardRef;
