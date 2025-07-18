import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Collection = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M5.25 5C5.25 3.48122 6.48122 2.25 8 2.25H16C17.5188 2.25 18.75 3.48122 18.75 5V6.35352C19.9043 6.67998 20.75 7.74122 20.75 9V10.3535C21.9043 10.68 22.75 11.7412 22.75 13V17C22.75 19.6234 20.6234 21.75 18 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V13C1.25 11.7412 2.09575 10.68 3.25 10.3535V9C3.25 7.74122 4.09575 6.67998 5.25 6.35352V5ZM6.75 6.25H17.25V5C17.25 4.30964 16.6904 3.75 16 3.75H8C7.30964 3.75 6.75 4.30964 6.75 5V6.25ZM4.75 10.25H19.25V9C19.25 8.30964 18.6904 7.75 18 7.75H6C5.30964 7.75 4.75 8.30964 4.75 9V10.25ZM4 11.75C3.30964 11.75 2.75 12.3096 2.75 13V17C2.75 18.7949 4.20507 20.25 6 20.25H18C19.7949 20.25 21.25 18.7949 21.25 17V13C21.25 12.3096 20.6904 11.75 20 11.75H4ZM9.25 14C9.25 13.5858 9.58579 13.25 10 13.25H14C14.4142 13.25 14.75 13.5858 14.75 14C14.75 14.4142 14.4142 14.75 14 14.75H10C9.58579 14.75 9.25 14.4142 9.25 14Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Collection);
export default ForwardRef;
