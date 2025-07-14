import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Microphone = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.25 6C7.25 3.37665 9.37665 1.25 12 1.25C14.6234 1.25 16.75 3.37665 16.75 6V12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12V6ZM12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12V6C15.25 4.20507 13.7949 2.75 12 2.75ZM5 10.25C5.41421 10.25 5.75 10.5858 5.75 11V12C5.75 15.4518 8.54822 18.25 12 18.25C15.4518 18.25 18.25 15.4518 18.25 12V11C18.25 10.5858 18.5858 10.25 19 10.25C19.4142 10.25 19.75 10.5858 19.75 11V12C19.75 16.0272 16.6783 19.337 12.75 19.7142V21.25H15C15.4142 21.25 15.75 21.5858 15.75 22C15.75 22.4142 15.4142 22.75 15 22.75H9C8.58579 22.75 8.25 22.4142 8.25 22C8.25 21.5858 8.58579 21.25 9 21.25H11.25V19.7142C7.3217 19.337 4.25 16.0272 4.25 12V11C4.25 10.5858 4.58579 10.25 5 10.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Microphone);
export default ForwardRef;
