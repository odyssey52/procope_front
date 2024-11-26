import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const Unlock = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2.75C10.798 2.75 9.74743 3.40216 9.18436 4.37554C8.97695 4.73409 8.51816 4.85661 8.15961 4.6492C7.80107 4.4418 7.67854 3.983 7.88595 3.62446C8.70612 2.20663 10.2409 1.25 12 1.25C14.6234 1.25 16.75 3.37665 16.75 6.00001L16.75 7.30888C19.017 7.66847 20.75 9.63185 20.75 12V18C20.75 20.6234 18.6234 22.75 16 22.75H8C5.37665 22.75 3.25 20.6234 3.25 18V12C3.25 9.37665 5.37665 7.25 8 7.25H15.25L15.25 6C15.25 4.20507 13.795 2.75 12 2.75ZM8 8.75C6.20507 8.75 4.75 10.2051 4.75 12V18C4.75 19.7949 6.20508 21.25 8 21.25H16C17.7949 21.25 19.25 19.7949 19.25 18V12C19.25 10.2051 17.7949 8.75 16 8.75H8ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14C11.25 13.5858 11.5858 13.25 12 13.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Unlock);
export default ForwardRef;
