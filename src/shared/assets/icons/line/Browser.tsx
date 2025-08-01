import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Browser = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 2.75C4.20507 2.75 2.75 4.20507 2.75 6V7.25H21.25V6C21.25 4.20507 19.7949 2.75 18 2.75H6ZM22.75 6C22.75 3.37665 20.6234 1.25 18 1.25H6C3.37665 1.25 1.25 3.37665 1.25 6V18C1.25 20.6234 3.37665 22.75 6 22.75H18C20.6234 22.75 22.75 20.6234 22.75 18V6ZM21.25 8.75H2.75V18C2.75 19.7949 4.20507 21.25 6 21.25H18C19.7949 21.25 21.25 19.7949 21.25 18V8.75Z"
      fill="currentColor"
    />
    <path
      d="M19 5C19 5.55228 18.5523 6 18 6C17.4477 6 17 5.55228 17 5C17 4.44772 17.4477 4 18 4C18.5523 4 19 4.44772 19 5Z"
      fill="currentColor"
    />
    <path
      d="M15 5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5C13 4.44772 13.4477 4 14 4C14.5523 4 15 4.44772 15 5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Browser);
export default ForwardRef;
