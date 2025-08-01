import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const MoneyDollar = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 8C1.25 5.37665 3.37665 3.25 6 3.25H18C20.6234 3.25 22.75 5.37665 22.75 8V16C22.75 18.6234 20.6234 20.75 18 20.75H6C3.37665 20.75 1.25 18.6234 1.25 16V8ZM6 4.75C4.20507 4.75 2.75 6.20507 2.75 8V16C2.75 17.7949 4.20507 19.25 6 19.25H18C19.7949 19.25 21.25 17.7949 21.25 16V8C21.25 6.20507 19.7949 4.75 18 4.75H6Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 11.25C11.3096 11.25 10.75 10.6904 10.75 10C10.75 9.30964 11.3096 8.75 12 8.75C12.6904 8.75 13.25 9.30964 13.25 10C13.25 10.4142 13.5858 10.75 14 10.75C14.4142 10.75 14.75 10.4142 14.75 10C14.75 8.48122 13.5188 7.25 12 7.25C10.4812 7.25 9.25 8.48122 9.25 10C9.25 11.5188 10.4812 12.75 12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15.25C11.3096 15.25 10.75 14.6904 10.75 14C10.75 13.5858 10.4142 13.25 10 13.25C9.58579 13.25 9.25 13.5858 9.25 14C9.25 15.5188 10.4812 16.75 12 16.75C13.5188 16.75 14.75 15.5188 14.75 14C14.75 12.4812 13.5188 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75C12.6904 12.75 13.25 13.3096 13.25 14C13.25 14.6904 12.6904 15.25 12 15.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5V8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8V6.5C11.25 6.08579 11.5858 5.75 12 5.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15.25C12.4142 15.25 12.75 15.5858 12.75 16V17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5V16C11.25 15.5858 11.5858 15.25 12 15.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MoneyDollar);
export default ForwardRef;
