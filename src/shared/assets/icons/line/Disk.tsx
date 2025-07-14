import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Disk = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 2.75C4.20508 2.75 2.75 4.20507 2.75 6V18C2.75 19.7949 4.20507 21.25 6 21.25H6.25V16C6.25 14.4812 7.48122 13.25 9 13.25H15C16.5188 13.25 17.75 14.4812 17.75 16V21.25H18C19.7949 21.25 21.25 19.7949 21.25 18V9.21241C21.25 8.35046 20.9076 7.52381 20.2981 6.91431L17.0857 3.7019C16.4762 3.09241 15.6495 2.75 14.7876 2.75H6ZM18 22.75C20.6234 22.75 22.75 20.6234 22.75 18V9.21241C22.75 7.95263 22.2496 6.74445 21.3588 5.85365L18.1463 2.64124C17.2556 1.75045 16.0474 1.25 14.7876 1.25H6C3.37665 1.25 1.25 3.37665 1.25 6V18C1.25 20.6234 3.37665 22.75 6 22.75H18ZM16.25 21.25V16C16.25 15.3096 15.6904 14.75 15 14.75H9C8.30964 14.75 7.75 15.3096 7.75 16V21.25H16.25ZM8.25 7C8.25 6.58579 8.58579 6.25 9 6.25L15 6.25C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75L9 7.75C8.58579 7.75 8.25 7.41421 8.25 7Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Disk);
export default ForwardRef;
