import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const Folder03 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 3.75C4.20507 3.75 2.75 5.20507 2.75 7V17C2.75 18.7949 4.20507 20.25 6 20.25H18C19.7949 20.25 21.25 18.7949 21.25 17V10C21.25 8.20507 19.7949 6.75 18 6.75H15.3333C14.3056 6.75 13.3055 6.41665 12.4833 5.8L10.6167 4.4C10.0541 3.97808 9.36987 3.75 8.66667 3.75H6ZM1.25 7C1.25 4.37665 3.37665 2.25 6 2.25H8.66667C9.69443 2.25 10.6945 2.58334 11.5167 3.2L13.3833 4.6C13.9459 5.02192 14.6301 5.25 15.3333 5.25H18C20.6234 5.25 22.75 7.37665 22.75 10V17C22.75 19.6234 20.6234 21.75 18 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V7Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Folder03);
export default ForwardRef;
