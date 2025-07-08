import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const UserRectangle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 11.25C10.7574 11.25 9.75 10.2426 9.75 9C9.75 7.75736 10.7574 6.75 12 6.75C13.2426 6.75 14.25 7.75736 14.25 9C14.25 10.2426 13.2426 11.25 12 11.25ZM8.25 9C8.25 11.0711 9.92893 12.75 12 12.75C14.0711 12.75 15.75 11.0711 15.75 9C15.75 6.92893 14.0711 5.25 12 5.25C9.92893 5.25 8.25 6.92893 8.25 9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 6C1.25 3.37665 3.37665 1.25 6 1.25H18C20.6234 1.25 22.75 3.37665 22.75 6V18C22.75 20.2148 21.2348 22.0738 19.1856 22.6006C18.8058 22.6983 18.4084 22.75 18 22.75H6C5.59158 22.75 5.19415 22.6983 4.81437 22.6006C2.76516 22.0738 1.25 20.2148 1.25 18V6ZM6 2.75C4.20507 2.75 2.75 4.20507 2.75 6V18C2.75 19.1891 3.38901 20.2301 4.34289 20.7966C4.92114 17.0878 8.1291 14.25 12 14.25C15.8709 14.25 19.0789 17.0878 19.6571 20.7966C20.611 20.2301 21.25 19.1891 21.25 18V6C21.25 4.20507 19.7949 2.75 18 2.75H6ZM18.2047 21.2437C17.8315 18.1487 15.1958 15.75 12 15.75C8.80421 15.75 6.16853 18.1487 5.79527 21.2437C5.86292 21.2479 5.93118 21.25 6 21.25H18C18.0688 21.25 18.1371 21.2479 18.2047 21.2437Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(UserRectangle);
export default ForwardRef;
