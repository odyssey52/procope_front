import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Lock = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V7.25H15.25V6C15.25 4.20507 13.7949 2.75 12 2.75ZM16.75 7.30888V6C16.75 3.37665 14.6234 1.25 12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V7.30888C4.98301 7.66846 3.25 9.63185 3.25 12V18C3.25 20.6234 5.37665 22.75 8 22.75H16C18.6234 22.75 20.75 20.6234 20.75 18V12C20.75 9.63185 19.017 7.66846 16.75 7.30888ZM8 8.75C6.20507 8.75 4.75 10.2051 4.75 12V18C4.75 19.7949 6.20508 21.25 8 21.25H16C17.7949 21.25 19.25 19.7949 19.25 18V12C19.25 10.2051 17.7949 8.75 16 8.75H8ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14C11.25 13.5858 11.5858 13.25 12 13.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Lock);
export default ForwardRef;
