import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const NotesCheck = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V2.75H15.25V2C15.25 1.58579 15.5858 1.25 16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V2.75H17C19.6234 2.75 21.75 4.87665 21.75 7.5V18C21.75 20.6234 19.6234 22.75 17 22.75H7C4.37665 22.75 2.25 20.6234 2.25 18V7.5C2.25 4.87665 4.37665 2.75 7 2.75H7.25V2C7.25 1.58579 7.58579 1.25 8 1.25ZM7.25 4.25H7C5.20507 4.25 3.75 5.70507 3.75 7.5V18C3.75 19.7949 5.20507 21.25 7 21.25H17C18.7949 21.25 20.25 19.7949 20.25 18V7.5C20.25 5.70507 18.7949 4.25 17 4.25H16.75V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V4.25H8.75V5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5V4.25ZM15.4939 10.4356C15.8056 10.7083 15.8372 11.1822 15.5644 11.4939L12.6945 14.7738C12.0778 15.4786 11.0156 15.5729 10.2843 14.9879L8.53148 13.5857C8.20803 13.3269 8.15559 12.8549 8.41435 12.5315C8.67311 12.208 9.14507 12.1556 9.46852 12.4143L11.2213 13.8166C11.3258 13.9002 11.4776 13.8867 11.5657 13.786L14.4356 10.5061C14.7083 10.1944 15.1822 10.1628 15.4939 10.4356Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(NotesCheck);
export default ForwardRef;
