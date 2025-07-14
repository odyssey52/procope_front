import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Files01 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.2981 2.64124C8.18889 1.75045 9.39708 1.25 10.6569 1.25L13 1.25C15.3859 1.25 17.3609 3.00909 17.6989 5.30106C19.9909 5.63906 21.75 7.6141 21.75 10V18C21.75 20.6234 19.6234 22.75 17 22.75H11C8.6141 22.75 6.63906 20.9909 6.30107 18.6989C4.00909 18.3609 2.25 16.3859 2.25 14L2.25 9.65685C2.25 8.39708 2.75045 7.18889 3.64124 6.2981L7.2981 2.64124ZM7.83697 18.75C8.17555 20.1833 9.46321 21.25 11 21.25H17C18.7949 21.25 20.25 19.7949 20.25 18V10C20.25 8.46321 19.1833 7.17555 17.75 6.83697L17.75 14C17.75 16.6234 15.6234 18.75 13 18.75H7.83697ZM9.75 2.87908L9.75 4C9.75 6.62335 7.62335 8.75 5 8.75L3.87908 8.75C3.79419 9.04211 3.75 9.3472 3.75 9.65685L3.75 14C3.75 15.7949 5.20507 17.25 7 17.25H13C14.7949 17.25 16.25 15.7949 16.25 14L16.25 6C16.25 4.20508 14.7949 2.75 13 2.75L10.6569 2.75C10.3472 2.75 10.0421 2.79419 9.75 2.87908ZM4.81066 7.25H5C6.79492 7.25 8.25 5.79493 8.25 4V3.81066L4.81066 7.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Files01);
export default ForwardRef;
