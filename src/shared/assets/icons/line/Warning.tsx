import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Warning = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z"
      fill="currentColor"
    />
    <path
      d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12ZM11.25 14V7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14ZM22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Warning);
export default ForwardRef;
