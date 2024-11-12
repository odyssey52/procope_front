import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Remove = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M7.22699 7.22699C7.51989 6.9341 7.99476 6.9341 8.28765 7.22699L12 10.9393L15.7123 7.22705C16.0052 6.93415 16.48 6.93415 16.7729 7.22705C17.0658 7.51994 17.0658 7.99481 16.7729 8.28771L13.0607 12L16.7729 15.7123C17.0658 16.0052 17.0658 16.48 16.7729 16.7729C16.48 17.0658 16.0052 17.0658 15.7123 16.7729L12 13.0607L8.28765 16.773C7.99476 17.0659 7.51989 17.0659 7.22699 16.773C6.9341 16.4801 6.9341 16.0052 7.22699 15.7123L10.9393 12L7.22699 8.28765C6.9341 7.99476 6.9341 7.51989 7.22699 7.22699Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Remove);
export default ForwardRef;
