import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const UserRemove = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M5.38566 15.6959C4.19864 16.2895 3.75 16.9706 3.75 17.5C3.75 18.0294 4.19864 18.7105 5.38566 19.3041C6.52782 19.8751 8.15819 20.25 10 20.25C11.8418 20.25 13.4722 19.8751 14.6143 19.3041C15.8014 18.7105 16.25 18.0294 16.25 17.5C16.25 16.9706 15.8014 16.2895 14.6143 15.6959C13.4722 15.1249 11.8418 14.75 10 14.75C8.15819 14.75 6.52782 15.1249 5.38566 15.6959ZM4.71484 14.3543C6.10618 13.6586 7.97582 13.25 10 13.25C12.0242 13.25 13.8938 13.6586 15.2852 14.3543C16.6316 15.0275 17.75 16.0964 17.75 17.5C17.75 18.9036 16.6316 19.9725 15.2852 20.6457C13.8938 21.3414 12.0242 21.75 10 21.75C7.97582 21.75 6.10618 21.3414 4.71484 20.6457C3.36836 19.9725 2.25 18.9036 2.25 17.5C2.25 16.0964 3.36836 15.0275 4.71484 14.3543Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3.75C8.20507 3.75 6.75 5.20507 6.75 7C6.75 8.79493 8.20507 10.25 10 10.25C11.7949 10.25 13.25 8.79493 13.25 7C13.25 5.20507 11.7949 3.75 10 3.75ZM5.25 7C5.25 4.37665 7.37665 2.25 10 2.25C12.6234 2.25 14.75 4.37665 14.75 7C14.75 9.62335 12.6234 11.75 10 11.75C7.37665 11.75 5.25 9.62335 5.25 7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.25 11C16.25 10.5858 16.5858 10.25 17 10.25H21C21.4142 10.25 21.75 10.5858 21.75 11C21.75 11.4142 21.4142 11.75 21 11.75H17C16.5858 11.75 16.25 11.4142 16.25 11Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(UserRemove);
export default ForwardRef;
