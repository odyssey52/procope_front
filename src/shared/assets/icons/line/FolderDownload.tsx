import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const FolderDownload = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 3.75C4.20507 3.75 2.75 5.20507 2.75 7V17C2.75 18.7949 4.20507 20.25 6 20.25H18C19.7949 20.25 21.25 18.7949 21.25 17V10C21.25 8.20507 19.7949 6.75 18 6.75H15.3333C14.3056 6.75 13.3055 6.41665 12.4833 5.8L10.6167 4.4C10.0541 3.97808 9.36987 3.75 8.66667 3.75H6ZM1.25 7C1.25 4.37665 3.37665 2.25 6 2.25H8.66667C9.69443 2.25 10.6945 2.58334 11.5167 3.2L13.3833 4.6C13.9459 5.02192 14.6301 5.25 15.3333 5.25H18C20.6234 5.25 22.75 7.37665 22.75 10V17C22.75 19.6234 20.6234 21.75 18 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V7ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V14.1718C12.7967 14.1367 12.8414 14.0979 12.8839 14.0555L14.4697 12.4697C14.7626 12.1768 15.2374 12.1768 15.5303 12.4697C15.8232 12.7626 15.8232 13.2374 15.5303 13.5303L13.9445 15.1161C12.8706 16.1901 11.1294 16.1901 10.0555 15.1161L8.46967 13.5303C8.17678 13.2374 8.17678 12.7626 8.46967 12.4697C8.76256 12.1768 9.23744 12.1768 9.53033 12.4697L11.1161 14.0555C11.1586 14.0979 11.2033 14.1367 11.25 14.1718V10C11.25 9.58579 11.5858 9.25 12 9.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderDownload);
export default ForwardRef;
