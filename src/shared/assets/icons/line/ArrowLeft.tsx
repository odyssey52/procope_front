import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ArrowLeft = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303L9.46967 16.5303C9.76256 16.8232 10.2374 16.8232 10.5303 16.5303C10.8232 16.2374 10.8232 15.7626 10.5303 15.4697L7.81066 12.75L18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25L7.81066 11.25L10.5303 8.53033C10.8232 8.23744 10.8232 7.76256 10.5303 7.46967C10.2374 7.17678 9.76256 7.17678 9.46967 7.46967L5.46967 11.4697Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeft);
export default ForwardRef;
