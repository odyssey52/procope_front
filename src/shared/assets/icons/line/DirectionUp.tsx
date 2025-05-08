import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const DirectionUp = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M17.5856 14.4686C17.3269 14.792 16.8549 14.8444 16.5315 14.5857L12 10.9605L7.46849 14.5857C7.14505 14.8444 6.67308 14.792 6.41432 14.4686C6.15556 14.1451 6.208 13.6731 6.53145 13.4144L11.5315 9.41438C11.8054 9.19525 12.1946 9.19525 12.4685 9.41438L17.4685 13.4144C17.7919 13.6731 17.8444 14.1451 17.5856 14.4686Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(DirectionUp);
export default ForwardRef;
