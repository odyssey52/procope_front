import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ArrowDown = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M11.4697 18.5303C11.7626 18.8232 12.2374 18.8232 12.5303 18.5303L16.5303 14.5303C16.8232 14.2374 16.8232 13.7626 16.5303 13.4697C16.2374 13.1768 15.7626 13.1768 15.4697 13.4697L12.75 16.1893V6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V16.1893L8.53033 13.4697C8.23744 13.1768 7.76256 13.1768 7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303L11.4697 18.5303Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowDown);
export default ForwardRef;
