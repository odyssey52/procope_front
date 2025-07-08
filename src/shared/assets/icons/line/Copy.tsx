import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Copy = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.25 6C7.25 3.37665 9.37665 1.25 12 1.25L18 1.25C20.6234 1.25 22.75 3.37665 22.75 6V12C22.75 14.6234 20.6234 16.75 18 16.75H16.75V18C16.75 20.6234 14.6234 22.75 12 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V12C1.25 9.37665 3.37665 7.25 6 7.25H7.25V6ZM8.75 7.25H12C14.6234 7.25 16.75 9.37665 16.75 12V15.25H18C19.7949 15.25 21.25 13.7949 21.25 12V6C21.25 4.20507 19.7949 2.75 18 2.75L12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V7.25ZM6 8.75C4.20507 8.75 2.75 10.2051 2.75 12V18C2.75 19.7949 4.20507 21.25 6 21.25H12C13.7949 21.25 15.25 19.7949 15.25 18V12C15.25 10.2051 13.7949 8.75 12 8.75H6Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Copy);
export default ForwardRef;
