import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Mail = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 7C1.25 4.37665 3.37665 2.25 6 2.25H18C20.6234 2.25 22.75 4.37665 22.75 7V17C22.75 19.6234 20.6234 21.75 18 21.75H6C3.37665 21.75 1.25 19.6234 1.25 17V7ZM6 3.75C4.20507 3.75 2.75 5.20507 2.75 7V17C2.75 18.7949 4.20507 20.25 6 20.25H18C19.7949 20.25 21.25 18.7949 21.25 17V7C21.25 5.20507 19.7949 3.75 18 3.75H6ZM5.37596 7.58397C5.60573 7.23933 6.07138 7.1462 6.41603 7.37596L10.1972 9.89676C11.2889 10.6245 12.7111 10.6245 13.8028 9.89676L17.584 7.37596C17.9286 7.1462 18.3943 7.23933 18.624 7.58397C18.8538 7.92862 18.7607 8.39427 18.416 8.62404L14.6348 11.1448C13.0393 12.2085 10.9607 12.2085 9.36518 11.1448L5.58397 8.62404C5.23933 8.39427 5.1462 7.92862 5.37596 7.58397Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Mail);
export default ForwardRef;
