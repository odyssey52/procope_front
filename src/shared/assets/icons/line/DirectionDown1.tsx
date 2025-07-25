import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const DirectionDown1 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.46855 6.41438C7.1451 6.15562 6.67313 6.20806 6.41438 6.53151C6.15562 6.85495 6.20806 7.32692 6.53151 7.58568L11.5315 11.5857C11.8054 11.8048 12.1946 11.8048 12.4685 11.5857L17.4685 7.58568C17.792 7.32692 17.8444 6.85495 17.5857 6.53151C17.3269 6.20806 16.855 6.15562 16.5315 6.41438L12 10.0396L7.46855 6.41438ZM7.46855 12.4144C7.1451 12.1556 6.67313 12.2081 6.41438 12.5315C6.15562 12.855 6.20806 13.3269 6.53151 13.5857L11.5315 17.5857C11.8054 17.8048 12.1946 17.8048 12.4685 17.5857L17.4685 13.5857C17.792 13.3269 17.8444 12.855 17.5857 12.5315C17.3269 12.2081 16.855 12.1556 16.5315 12.4144L12 16.0396L7.46855 12.4144Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(DirectionDown1);
export default ForwardRef;
