import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const In = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12.5303 8.46967C12.2374 8.17678 11.7626 8.17678 11.4697 8.46967L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303C12.8232 15.2374 12.8232 14.7626 12.5303 14.4697L10.8107 12.75H21C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25H10.8107L12.5303 9.53033C12.8232 9.23744 12.8232 8.76256 12.5303 8.46967Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 7C2.25 4.37665 4.37665 2.25 7 2.25H11C13.6234 2.25 15.75 4.37665 15.75 7V7.5C15.75 7.91421 15.4142 8.25 15 8.25C14.5858 8.25 14.25 7.91421 14.25 7.5V7C14.25 5.20507 12.7949 3.75 11 3.75H7C5.20507 3.75 3.75 5.20507 3.75 7V17C3.75 18.7949 5.20507 20.25 7 20.25H11C12.7949 20.25 14.25 18.7949 14.25 17V16.5C14.25 16.0858 14.5858 15.75 15 15.75C15.4142 15.75 15.75 16.0858 15.75 16.5V17C15.75 19.6234 13.6234 21.75 11 21.75H7C4.37665 21.75 2.25 19.6234 2.25 17V7Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(In);
export default ForwardRef;
