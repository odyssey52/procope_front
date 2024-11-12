import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const TaskCheck = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M20.25 18C20.25 19.7949 18.7949 21.25 17 21.25L7 21.25C5.20507 21.25 3.75 19.7949 3.75 18L3.75 6C3.75 4.20508 5.20507 2.75 7 2.75L12.3431 2.75C13.2051 2.75 14.0317 3.09241 14.6412 3.7019L19.2981 8.35876C19.9076 8.96825 20.25 9.7949 20.25 10.6569L20.25 18ZM17 22.75C19.6234 22.75 21.75 20.6234 21.75 18L21.75 10.6569C21.75 9.39708 21.2496 8.1889 20.3588 7.2981L15.7019 2.64124C14.8111 1.75045 13.6029 1.25 12.3431 1.25L7 1.25C4.37665 1.25 2.25 3.37665 2.25 6L2.25 18C2.25 20.6234 4.37665 22.75 7 22.75L17 22.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 8.25L18 8.25C16.2051 8.25 14.75 6.79493 14.75 5L14.75 2L13.25 2L13.25 5C13.25 7.62335 15.3766 9.75 18 9.75L21 9.75L21 8.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4939 11.4356C15.8056 11.7083 15.8372 12.1822 15.5645 12.4939L12.6946 15.7738C12.0779 16.4786 11.0156 16.5729 10.2843 15.9879L8.53151 14.5857C8.20806 14.3269 8.15562 13.8549 8.41438 13.5315C8.67313 13.208 9.1451 13.1556 9.46855 13.4144L11.2214 14.8166C11.3258 14.9002 11.4776 14.8867 11.5657 14.786L14.4356 11.5061C14.7084 11.1944 15.1822 11.1628 15.4939 11.4356Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(TaskCheck);
export default ForwardRef;
