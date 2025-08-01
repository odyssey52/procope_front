import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const HartArrowUp = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M2 1.25C2.41421 1.25 2.75 1.58579 2.75 2V18C2.75 19.7949 4.20507 21.25 6 21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V2C1.25 1.58579 1.58579 1.25 2 1.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5303 9.46967C19.8232 9.76256 19.8232 10.2374 19.5303 10.5303L16.9445 13.1161C15.8706 14.1901 14.1294 14.1901 13.0555 13.1161L11.8839 11.9445C11.3957 11.4564 10.6043 11.4564 10.1161 11.9445L7.53033 14.5303C7.23744 14.8232 6.76256 14.8232 6.46967 14.5303C6.17678 14.2374 6.17678 13.7626 6.46967 13.4697L9.05546 10.8839C10.1294 9.80994 11.8706 9.80994 12.9445 10.8839L14.1161 12.0555C14.6043 12.5436 15.3957 12.5436 15.8839 12.0555L18.4697 9.46967C18.7626 9.17678 19.2374 9.17678 19.5303 9.46967Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.75 9C16.75 8.58579 17.0858 8.25 17.5 8.25H19C19.9665 8.25 20.75 9.0335 20.75 10V11.5C20.75 11.9142 20.4142 12.25 20 12.25C19.5858 12.25 19.25 11.9142 19.25 11.5V10C19.25 9.86193 19.1381 9.75 19 9.75H17.5C17.0858 9.75 16.75 9.41421 16.75 9Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(HartArrowUp);
export default ForwardRef;
