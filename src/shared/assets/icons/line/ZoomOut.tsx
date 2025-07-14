import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ZoomOut = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M13.5 6.75C13.0858 6.75 12.75 6.41421 12.75 6C12.75 5.58579 13.0858 5.25 13.5 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V10.5C18.75 10.9142 18.4142 11.25 18 11.25C17.5858 11.25 17.25 10.9142 17.25 10.5V7.81066L7.81066 17.25H10.5C10.9142 17.25 11.25 17.5858 11.25 18C11.25 18.4142 10.9142 18.75 10.5 18.75H6C5.58579 18.75 5.25 18.4142 5.25 18V13.5C5.25 13.0858 5.58579 12.75 6 12.75C6.41421 12.75 6.75 13.0858 6.75 13.5V16.1893L16.1893 6.75H13.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomOut);
export default ForwardRef;
