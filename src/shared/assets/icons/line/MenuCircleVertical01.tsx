import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const MenuCircleVertical01 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M13.5 7.25C13.5 7.94036 12.9404 8.5 12.25 8.5C11.5596 8.5 11 7.94036 11 7.25C11 6.55964 11.5596 6 12.25 6C12.9404 6 13.5 6.55964 13.5 7.25Z"
      fill="currentColor"
    />
    <path
      d="M13.5 12.25C13.5 12.9404 12.9404 13.5 12.25 13.5C11.5596 13.5 11 12.9404 11 12.25C11 11.5596 11.5596 11 12.25 11C12.9404 11 13.5 11.5596 13.5 12.25Z"
      fill="currentColor"
    />
    <path
      d="M13.5 17.25C13.5 17.9404 12.9404 18.5 12.25 18.5C11.5596 18.5 11 17.9404 11 17.25C11 16.5596 11.5596 16 12.25 16C12.9404 16 13.5 16.5596 13.5 17.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MenuCircleVertical01);
export default ForwardRef;
