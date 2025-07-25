import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Description = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.25 11C7.25 10.5858 7.58579 10.25 8 10.25L12 10.25C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75L8 11.75C7.58579 11.75 7.25 11.4142 7.25 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H16C16.4142 15.25 16.75 15.5858 16.75 16C16.75 16.4142 16.4142 16.75 16 16.75H8C7.58579 16.75 7.25 16.4142 7.25 16Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2.75C5.20507 2.75 3.75 4.20507 3.75 6V18C3.75 19.7949 5.20507 21.25 7 21.25H17C18.7949 21.25 20.25 19.7949 20.25 18V9.75H18C15.3766 9.75 13.25 7.62335 13.25 5V2.75H7ZM14.75 3.81066L19.1893 8.25H18C16.2051 8.25 14.75 6.79493 14.75 5V3.81066ZM2.25 6C2.25 3.37665 4.37665 1.25 7 1.25H14C14.1989 1.25 14.3897 1.32902 14.5303 1.46967L21.5303 8.46967C21.671 8.61032 21.75 8.80109 21.75 9V18C21.75 20.6234 19.6234 22.75 17 22.75H7C4.37665 22.75 2.25 20.6234 2.25 18V6Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Description);
export default ForwardRef;
