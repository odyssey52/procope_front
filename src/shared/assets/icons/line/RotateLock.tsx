import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const RotateLock = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 7.75C11.3096 7.75 10.75 8.30964 10.75 9V10C10.75 10.4142 10.4142 10.75 10 10.75C9.58579 10.75 9.25 10.4142 9.25 10V9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9V10C14.75 10.4142 14.4142 10.75 14 10.75C13.5858 10.75 13.25 10.4142 13.25 10V9C13.25 8.30964 12.6904 7.75 12 7.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 12C7.25 10.4812 8.48122 9.25 10 9.25H14C15.5188 9.25 16.75 10.4812 16.75 12V14C16.75 15.5188 15.5188 16.75 14 16.75H10C8.48122 16.75 7.25 15.5188 7.25 14V12ZM10 10.75C9.30964 10.75 8.75 11.3096 8.75 12V14C8.75 14.6904 9.30964 15.25 10 15.25H14C14.6904 15.25 15.25 14.6904 15.25 14V12C15.25 11.3096 14.6904 10.75 14 10.75H10Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C15.6308 21.25 18.7744 19.1582 20.2889 16.1107C20.4732 15.7397 20.9234 15.5885 21.2943 15.7728C21.6652 15.9571 21.8165 16.4073 21.6322 16.7782C19.874 20.3161 16.2219 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75C21.5858 12.75 21.25 12.4142 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.2887 10.7628C18.4197 10.3698 18.8444 10.1575 19.2374 10.2884L22.2374 11.2884C22.6303 11.4194 22.8427 11.8442 22.7117 12.2371C22.5807 12.6301 22.156 12.8425 21.763 12.7115L18.763 11.7115C18.3701 11.5805 18.1577 11.1557 18.2887 10.7628Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(RotateLock);
export default ForwardRef;
