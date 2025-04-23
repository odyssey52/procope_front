import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const CalendarCheck = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5V2C7.25 1.58579 7.58579 1.25 8 1.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V2C15.25 1.58579 15.5858 1.25 16 1.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 7.5C2.25 4.87665 4.37665 2.75 7 2.75H17C19.6234 2.75 21.75 4.87665 21.75 7.5V18C21.75 20.6234 19.6234 22.75 17 22.75H7C4.37665 22.75 2.25 20.6234 2.25 18V7.5ZM7 4.25C5.20507 4.25 3.75 5.70507 3.75 7.5V18C3.75 19.7949 5.20507 21.25 7 21.25H17C18.7949 21.25 20.25 19.7949 20.25 18V7.5C20.25 5.70507 18.7949 4.25 17 4.25H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4939 12.4356C15.8056 12.7083 15.8372 13.1822 15.5645 13.4939L12.6946 16.7738C12.0779 17.4786 11.0156 17.5729 10.2843 16.9879L8.53151 15.5857C8.20806 15.3269 8.15562 14.8549 8.41438 14.5315C8.67313 14.208 9.1451 14.1556 9.46855 14.4144L11.2214 15.8166C11.3258 15.9002 11.4776 15.8867 11.5657 15.786L14.4356 12.5061C14.7084 12.1944 15.1822 12.1628 15.4939 12.4356Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H21C21.4142 8.25 21.75 8.58579 21.75 9C21.75 9.41421 21.4142 9.75 21 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarCheck);
export default ForwardRef;
