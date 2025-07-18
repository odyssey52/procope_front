import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Calendar01 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M2.25 7.5C2.25 4.87665 4.37665 2.75 7 2.75H17C19.6234 2.75 21.75 4.87665 21.75 7.5V18C21.75 20.6234 19.6234 22.75 17 22.75H7C4.37665 22.75 2.25 20.6234 2.25 18V7.5ZM7 4.25C5.20507 4.25 3.75 5.70507 3.75 7.5V18C3.75 19.7949 5.20507 21.25 7 21.25H17C18.7949 21.25 20.25 19.7949 20.25 18V7.5C20.25 5.70507 18.7949 4.25 17 4.25H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H21C21.4142 8.25 21.75 8.58579 21.75 9C21.75 9.41421 21.4142 9.75 21 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2L8.75 5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5L7.25 2C7.25 1.58579 7.58579 1.25 8 1.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V2C15.25 1.58579 15.5858 1.25 16 1.25Z"
      fill="currentColor"
    />
    <path
      d="M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z"
      fill="currentColor"
    />
    <path
      d="M17 15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15C15 14.4477 15.4477 14 16 14C16.5523 14 17 14.4477 17 15Z"
      fill="currentColor"
    />
    <path
      d="M9 15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15C7 14.4477 7.44772 14 8 14C8.55228 14 9 14.4477 9 15Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Calendar01);
export default ForwardRef;
