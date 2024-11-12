import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Mouse = (
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
      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4.25H15C17.6234 4.25 19.75 6.37665 19.75 9V15C19.75 19.2802 16.2802 22.75 12 22.75C7.71979 22.75 4.25 19.2802 4.25 15V9C4.25 6.37665 6.37665 4.25 9 4.25H11.25V2C11.25 1.58579 11.5858 1.25 12 1.25ZM9 5.75C7.20507 5.75 5.75 7.20507 5.75 9V15C5.75 18.4518 8.54822 21.25 12 21.25C15.4518 21.25 18.25 18.4518 18.25 15V9C18.25 7.20507 16.7949 5.75 15 5.75H9ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Mouse);
export default ForwardRef;
