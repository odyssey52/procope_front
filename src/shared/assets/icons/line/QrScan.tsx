import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const QrScan = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7 5.75C6.30964 5.75 5.75 6.30964 5.75 7V8C5.75 8.41421 5.41421 8.75 5 8.75C4.58579 8.75 4.25 8.41421 4.25 8V7C4.25 5.48122 5.48122 4.25 7 4.25H17C18.5188 4.25 19.75 5.48122 19.75 7V8C19.75 8.41421 19.4142 8.75 19 8.75C18.5858 8.75 18.25 8.41421 18.25 8V7C18.25 6.30964 17.6904 5.75 17 5.75H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 18.25C17.6904 18.25 18.25 17.6904 18.25 17L18.25 16C18.25 15.5858 18.5858 15.25 19 15.25C19.4142 15.25 19.75 15.5858 19.75 16L19.75 17C19.75 18.5188 18.5188 19.75 17 19.75L7 19.75C5.48122 19.75 4.25 18.5188 4.25 17L4.25 16C4.25 15.5858 4.58579 15.25 5 15.25C5.41421 15.25 5.75 15.5858 5.75 16L5.75 17C5.75 17.6904 6.30964 18.25 7 18.25L17 18.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(QrScan);
export default ForwardRef;
