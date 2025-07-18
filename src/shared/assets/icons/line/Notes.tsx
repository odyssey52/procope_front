import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Notes = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V2.75H15.25V2C15.25 1.58579 15.5858 1.25 16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V2.75H17C19.6234 2.75 21.75 4.87665 21.75 7.5V18C21.75 20.6234 19.6234 22.75 17 22.75H7C4.37665 22.75 2.25 20.6234 2.25 18V7.5C2.25 4.87665 4.37665 2.75 7 2.75H7.25V2C7.25 1.58579 7.58579 1.25 8 1.25ZM7.25 4.25H7C5.20507 4.25 3.75 5.70507 3.75 7.5V18C3.75 19.7949 5.20507 21.25 7 21.25H17C18.7949 21.25 20.25 19.7949 20.25 18V7.5C20.25 5.70507 18.7949 4.25 17 4.25H16.75V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V4.25H8.75V5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5V4.25ZM6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9ZM6.25 13C6.25 12.5858 6.58579 12.25 7 12.25H17C17.4142 12.25 17.75 12.5858 17.75 13C17.75 13.4142 17.4142 13.75 17 13.75H7C6.58579 13.75 6.25 13.4142 6.25 13ZM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H12C12.4142 16.25 12.75 16.5858 12.75 17C12.75 17.4142 12.4142 17.75 12 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Notes);
export default ForwardRef;
