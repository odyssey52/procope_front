import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const File03 = (
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
      d="M7 2.75C5.20508 2.75 3.75 4.20507 3.75 6L3.75 18C3.75 19.7949 5.20507 21.25 7 21.25H11.3431C11.6528 21.25 11.9579 21.2058 12.25 21.1209V18C12.25 15.3766 14.3766 13.25 17 13.25L20.1209 13.25C20.2058 12.9579 20.25 12.6528 20.25 12.3431V6C20.25 4.20508 18.7949 2.75 17 2.75L7 2.75ZM19.1893 14.75L17 14.75C15.2051 14.75 13.75 16.2051 13.75 18V20.1893L19.1893 14.75ZM2.25 6C2.25 3.37665 4.37665 1.25 7 1.25L17 1.25C19.6234 1.25 21.75 3.37665 21.75 6V12.3431C21.75 13.6029 21.2496 14.8111 20.3588 15.7019L14.7019 21.3588C13.8111 22.2496 12.6029 22.75 11.3431 22.75H7C4.37665 22.75 2.25 20.6234 2.25 18L2.25 6ZM7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H16C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(File03);
export default ForwardRef;
