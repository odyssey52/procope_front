import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const FolderAccept = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 3.75C4.20507 3.75 2.75 5.20507 2.75 7V17C2.75 18.7949 4.20507 20.25 6 20.25H18C19.7949 20.25 21.25 18.7949 21.25 17V10C21.25 8.20507 19.7949 6.75 18 6.75H15.3333C14.3056 6.75 13.3055 6.41665 12.4833 5.8L10.6167 4.4C10.0541 3.97808 9.36987 3.75 8.66667 3.75H6ZM1.25 7C1.25 4.37665 3.37665 2.25 6 2.25H8.66667C9.69443 2.25 10.6945 2.58334 11.5167 3.2L13.3833 4.6C13.9459 5.02192 14.6301 5.25 15.3333 5.25H18C20.6234 5.25 22.75 7.37665 22.75 10V17C22.75 19.6234 20.6234 21.75 18 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V7ZM15.4939 10.4356C15.8056 10.7083 15.8372 11.1822 15.5644 11.4939L12.6945 14.7738C12.0778 15.4786 11.0156 15.5729 10.2843 14.9879L8.53148 13.5857C8.20803 13.3269 8.15559 12.8549 8.41435 12.5315C8.67311 12.208 9.14507 12.1556 9.46852 12.4143L11.2213 13.8166C11.3258 13.9002 11.4776 13.8867 11.5657 13.786L14.4356 10.5061C14.7083 10.1944 15.1822 10.1628 15.4939 10.4356Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderAccept);
export default ForwardRef;
