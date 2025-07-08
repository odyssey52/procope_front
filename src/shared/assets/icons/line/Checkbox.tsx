import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Checkbox = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_167_8239)">
      <path
        d="M5.00008 1.66666H15.0001C16.841 1.66666 18.3334 3.15905 18.3334 5V15C18.3334 16.8409 16.841 18.3333 15.0001 18.3333H5.00008C3.15913 18.3333 1.66675 16.8409 1.66675 15V5C1.66675 3.15905 3.15913 1.66666 5.00008 1.66666Z"
        stroke="#6B7280"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_167_8239">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(Checkbox);
export default ForwardRef;
