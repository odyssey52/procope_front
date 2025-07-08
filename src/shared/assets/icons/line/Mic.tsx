import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Mic = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6.25 7C6.25 3.82436 8.82436 1.25 12 1.25C15.1756 1.25 17.75 3.82436 17.75 7V14C17.75 17.1756 15.1756 19.75 12 19.75C8.82436 19.75 6.25 17.1756 6.25 14V7ZM12 2.75C9.65279 2.75 7.75 4.65279 7.75 7V14C7.75 16.3472 9.65279 18.25 12 18.25C14.3472 18.25 16.25 16.3472 16.25 14V13.75H13C12.5858 13.75 12.25 13.4142 12.25 13C12.25 12.5858 12.5858 12.25 13 12.25H16.25V8.75H13C12.5858 8.75 12.25 8.41421 12.25 8C12.25 7.58579 12.5858 7.25 13 7.25H16.25V7C16.25 4.65279 14.3472 2.75 12 2.75ZM4 11.25C4.41421 11.25 4.75 11.5858 4.75 12V14C4.75 18.0041 7.99594 21.25 12 21.25C16.0041 21.25 19.25 18.0041 19.25 14V12C19.25 11.5858 19.5858 11.25 20 11.25C20.4142 11.25 20.75 11.5858 20.75 12V14C20.75 18.8325 16.8325 22.75 12 22.75C7.16751 22.75 3.25 18.8325 3.25 14V12C3.25 11.5858 3.58579 11.25 4 11.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Mic);
export default ForwardRef;
