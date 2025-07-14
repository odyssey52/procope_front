import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Note = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 20.25C4.20507 20.25 2.75 18.7949 2.75 17V7C2.75 5.20507 4.20507 3.75 6 3.75H18C19.7949 3.75 21.25 5.20507 21.25 7V13.25H19C16.3766 13.25 14.25 15.3766 14.25 18V20.25H6ZM15.75 19.1893L20.1893 14.75H19C17.2051 14.75 15.75 16.2051 15.75 18V19.1893ZM1.25 17C1.25 19.6234 3.37665 21.75 6 21.75H15C15.1989 21.75 15.3897 21.671 15.5303 21.5303L22.5303 14.5303C22.671 14.3897 22.75 14.1989 22.75 14V7C22.75 4.37665 20.6234 2.25 18 2.25H6C3.37665 2.25 1.25 4.37665 1.25 7V17Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 14C6.25 13.5858 6.58579 13.25 7 13.25L12 13.25C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75L7 14.75C6.58579 14.75 6.25 14.4142 6.25 14Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Note);
export default ForwardRef;
