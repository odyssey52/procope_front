import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const TickDouble = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M16.5018 6.44254C16.8096 6.71963 16.8346 7.19385 16.5575 7.50173L10.6009 14.1202L11.995 15.2355C12.512 15.6492 13.262 15.5878 13.705 15.0956L21.4426 6.49828C21.7197 6.1904 22.1939 6.16544 22.5018 6.44254C22.8096 6.71963 22.8346 7.19385 22.5575 7.50173L14.8199 16.0991C13.8454 17.1819 12.1955 17.3168 11.0579 16.4068L9.59573 15.237L8.8199 16.0991C7.84536 17.1819 6.19549 17.3168 5.05793 16.4068L1.53151 13.5857C1.20806 13.3269 1.15562 12.8549 1.41438 12.5315C1.67313 12.208 2.1451 12.1556 2.46855 12.4144L5.99497 15.2355C6.51204 15.6492 7.26199 15.5878 7.70496 15.0956L8.42245 14.2984L7.53151 13.5857C7.20806 13.3269 7.15562 12.8549 7.41438 12.5315C7.67313 12.208 8.1451 12.1556 8.46855 12.4144L9.42759 13.1816L15.4426 6.49828C15.7197 6.1904 16.1939 6.16544 16.5018 6.44254Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(TickDouble);
export default ForwardRef;
