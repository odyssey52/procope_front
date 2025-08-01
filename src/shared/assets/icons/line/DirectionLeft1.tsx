import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const DirectionLeft1 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M17.5856 7.46855C17.8444 7.1451 17.7919 6.67313 17.4685 6.41438C17.145 6.15562 16.6731 6.20806 16.4143 6.53151L12.4143 11.5315C12.1952 11.8054 12.1952 12.1946 12.4143 12.4685L16.4143 17.4685C16.6731 17.792 17.145 17.8444 17.4685 17.5857C17.7919 17.3269 17.8444 16.855 17.5856 16.5315L13.9604 12L17.5856 7.46855ZM11.5856 7.46855C11.8444 7.1451 11.7919 6.67313 11.4685 6.41438C11.145 6.15562 10.6731 6.20806 10.4143 6.53151L6.41432 11.5315C6.19519 11.8054 6.19519 12.1946 6.41432 12.4685L10.4143 17.4685C10.6731 17.792 11.145 17.8444 11.4685 17.5857C11.7919 17.3269 11.8444 16.855 11.5856 16.5315L7.96044 12L11.5856 7.46855Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(DirectionLeft1);
export default ForwardRef;
