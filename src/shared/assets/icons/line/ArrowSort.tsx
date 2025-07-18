import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ArrowSort = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.46967 5.46967C7.76256 5.17678 8.23744 5.17678 8.53033 5.46967L11.5303 8.46967C11.8232 8.76256 11.8232 9.23744 11.5303 9.53033C11.2374 9.82322 10.7626 9.82322 10.4697 9.53033L8.75 7.81066V18C8.75 18.4142 8.41421 18.75 8 18.75C7.58579 18.75 7.25 18.4142 7.25 18L7.25 7.81066L5.53033 9.53033C5.23744 9.82322 4.76256 9.82322 4.46967 9.53033C4.17678 9.23744 4.17678 8.76256 4.46967 8.46967L7.46967 5.46967Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5303 18.5303C16.2374 18.8232 15.7626 18.8232 15.4697 18.5303L12.4697 15.5303C12.1768 15.2374 12.1768 14.7626 12.4697 14.4697C12.7626 14.1768 13.2374 14.1768 13.5303 14.4697L15.25 16.1893L15.25 6C15.25 5.58579 15.5858 5.25 16 5.25C16.4142 5.25 16.75 5.58579 16.75 6L16.75 16.1893L18.4697 14.4697C18.7626 14.1768 19.2374 14.1768 19.5303 14.4697C19.8232 14.7626 19.8232 15.2374 19.5303 15.5303L16.5303 18.5303Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowSort);
export default ForwardRef;
