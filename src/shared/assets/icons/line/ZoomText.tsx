import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ZoomText = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H15C15.4142 3.25 15.75 3.58579 15.75 4C15.75 4.41421 15.4142 4.75 15 4.75H2C1.58579 4.75 1.25 4.41421 1.25 4ZM16 8.75C13.1005 8.75 10.75 11.1005 10.75 14C10.75 16.8995 13.1005 19.25 16 19.25C18.8995 19.25 21.25 16.8995 21.25 14C21.25 11.1005 18.8995 8.75 16 8.75ZM9.25 14C9.25 10.2721 12.2721 7.25 16 7.25C19.7279 7.25 22.75 10.2721 22.75 14C22.75 15.5938 22.1976 17.0585 21.2739 18.2133L22.5303 19.4697C22.8232 19.7626 22.8232 20.2374 22.5303 20.5303C22.2374 20.8232 21.7626 20.8232 21.4697 20.5303L20.2133 19.2739C19.0585 20.1976 17.5938 20.75 16 20.75C12.2721 20.75 9.25 17.7279 9.25 14ZM1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H7C7.41421 8.25 7.75 8.58579 7.75 9C7.75 9.41421 7.41421 9.75 7 9.75H2C1.58579 9.75 1.25 9.41421 1.25 9ZM1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H7C7.41421 13.25 7.75 13.5858 7.75 14C7.75 14.4142 7.41421 14.75 7 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomText);
export default ForwardRef;
