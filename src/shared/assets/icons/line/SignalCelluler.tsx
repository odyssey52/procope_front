import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const SignalCelluler = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M21 3.25C21.4142 3.25 21.75 3.58579 21.75 4V20C21.75 20.4142 21.4142 20.75 21 20.75C20.5858 20.75 20.25 20.4142 20.25 20V4C20.25 3.58579 20.5858 3.25 21 3.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 7.25C15.4142 7.25 15.75 7.58579 15.75 8V20C15.75 20.4142 15.4142 20.75 15 20.75C14.5858 20.75 14.25 20.4142 14.25 20V8C14.25 7.58579 14.5858 7.25 15 7.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 11.25C9.41421 11.25 9.75 11.5858 9.75 12V20C9.75 20.4142 9.41421 20.75 9 20.75C8.58579 20.75 8.25 20.4142 8.25 20V12C8.25 11.5858 8.58579 11.25 9 11.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 15.25C3.41421 15.25 3.75 15.5858 3.75 16V20C3.75 20.4142 3.41421 20.75 3 20.75C2.58579 20.75 2.25 20.4142 2.25 20V16C2.25 15.5858 2.58579 15.25 3 15.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SignalCelluler);
export default ForwardRef;
