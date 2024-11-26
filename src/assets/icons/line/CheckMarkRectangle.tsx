import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const CheckMarkRectangle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 2.75C4.20507 2.75 2.75 4.20507 2.75 6V18C2.75 19.7949 4.20507 21.25 6 21.25H18C19.7949 21.25 21.25 19.7949 21.25 18V9C21.25 8.58579 21.5858 8.25 22 8.25C22.4142 8.25 22.75 8.58579 22.75 9V18C22.75 20.6234 20.6234 22.75 18 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V6C1.25 3.37665 3.37665 1.25 6 1.25H17C17.4142 1.25 17.75 1.58579 17.75 2C17.75 2.41421 17.4142 2.75 17 2.75H6ZM21.5017 3.44253C21.8096 3.71962 21.8346 4.19384 21.5575 4.50172L13.8199 13.0991C12.8453 14.1819 11.1955 14.3168 10.0579 13.4068L6.53148 10.5857C6.20803 10.3269 6.15559 9.85493 6.41435 9.53148C6.67311 9.20803 7.14507 9.15559 7.46852 9.41435L10.9949 12.2355C11.512 12.6491 12.262 12.5878 12.7049 12.0956L20.4425 3.49828C20.7196 3.19039 21.1938 3.16544 21.5017 3.44253Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckMarkRectangle);
export default ForwardRef;
