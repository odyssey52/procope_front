import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const RemoveCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM8.64125 8.64125C8.93414 8.34835 9.40901 8.34835 9.70191 8.64125L12 10.9393L14.2981 8.64125C14.591 8.34835 15.0659 8.34835 15.3588 8.64125C15.6516 8.93414 15.6516 9.40901 15.3588 9.70191L13.0607 12L15.3588 14.2981C15.6517 14.591 15.6517 15.0659 15.3588 15.3588C15.0659 15.6517 14.591 15.6517 14.2981 15.3588L12 13.0607L9.7019 15.3588C9.40901 15.6517 8.93413 15.6517 8.64124 15.3588C8.34835 15.0659 8.34835 14.591 8.64124 14.2981L10.9393 12L8.64125 9.70191C8.34835 9.40901 8.34835 8.93414 8.64125 8.64125Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(RemoveCircle);
export default ForwardRef;
