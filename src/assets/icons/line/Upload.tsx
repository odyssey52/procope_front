import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Upload = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967L11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L15.5303 5.46967C15.8232 5.76256 15.8232 6.23744 15.5303 6.53033C15.2374 6.82322 14.7626 6.82322 14.4697 6.53033L12.75 4.81066L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15L11.25 4.81066L9.53033 6.53033C9.23744 6.82322 8.76256 6.82322 8.46967 6.53033Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 21.75C4.37665 21.75 2.25 19.6234 2.25 17L2.25 13C2.25 10.3766 4.37665 8.25 7 8.25L7.5 8.25C7.91421 8.25 8.25 8.58579 8.25 9C8.25 9.41421 7.91421 9.75 7.5 9.75L7 9.75C5.20507 9.75 3.75 11.2051 3.75 13L3.75 17C3.75 18.7949 5.20507 20.25 7 20.25L17 20.25C18.7949 20.25 20.25 18.7949 20.25 17L20.25 13C20.25 11.2051 18.7949 9.75 17 9.75L16.5 9.75C16.0858 9.75 15.75 9.41421 15.75 9C15.75 8.58579 16.0858 8.25 16.5 8.25L17 8.25C19.6234 8.25 21.75 10.3766 21.75 13L21.75 17C21.75 19.6234 19.6234 21.75 17 21.75L7 21.75Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Upload);
export default ForwardRef;
