import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Chat = (
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
      d="M1.25 12C1.25 6.61522 5.61522 2.25 11 2.25H13C18.3848 2.25 22.75 6.61522 22.75 12C22.75 17.3848 18.3848 21.75 13 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V12ZM11 3.75C6.44365 3.75 2.75 7.44365 2.75 12V17C2.75 18.7949 4.20507 20.25 6 20.25H13C17.5564 20.25 21.25 16.5563 21.25 12C21.25 7.44365 17.5564 3.75 13 3.75H11Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Chat);
export default ForwardRef;
