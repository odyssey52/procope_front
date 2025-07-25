import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const DirectionUp1 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.46855 17.5856C7.1451 17.8444 6.67313 17.7919 6.41438 17.4685C6.15562 17.145 6.20806 16.6731 6.53151 16.4143L11.5315 12.4143C11.8054 12.1952 12.1946 12.1952 12.4685 12.4143L17.4685 16.4143C17.792 16.6731 17.8444 17.145 17.5857 17.4685C17.3269 17.7919 16.855 17.8444 16.5315 17.5856L12 13.9604L7.46855 17.5856ZM7.46855 11.5856C7.1451 11.8444 6.67313 11.7919 6.41438 11.4685C6.15562 11.145 6.20806 10.6731 6.53151 10.4143L11.5315 6.41432C11.8054 6.19519 12.1946 6.19519 12.4685 6.41432L17.4685 10.4143C17.792 10.6731 17.8444 11.145 17.5857 11.4685C17.3269 11.7919 16.855 11.8444 16.5315 11.5856L12 7.96044L7.46855 11.5856Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(DirectionUp1);
export default ForwardRef;
