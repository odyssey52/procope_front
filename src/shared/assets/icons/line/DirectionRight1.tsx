import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const DirectionRight1 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6.41438 7.46855C6.15562 7.1451 6.20806 6.67313 6.53151 6.41438C6.85495 6.15562 7.32692 6.20806 7.58568 6.53151L11.5857 11.5315C11.8048 11.8054 11.8048 12.1946 11.5857 12.4685L7.58568 17.4685C7.32692 17.792 6.85495 17.8444 6.53151 17.5857C6.20806 17.3269 6.15562 16.855 6.41438 16.5315L10.0396 12L6.41438 7.46855ZM12.4144 7.46855C12.1556 7.1451 12.2081 6.67313 12.5315 6.41438C12.855 6.15562 13.3269 6.20806 13.5857 6.53151L17.5857 11.5315C17.8048 11.8054 17.8048 12.1946 17.5857 12.4685L13.5857 17.4685C13.3269 17.792 12.855 17.8444 12.5315 17.5857C12.2081 17.3269 12.1556 16.855 12.4144 16.5315L16.0396 12L12.4144 7.46855Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(DirectionRight1);
export default ForwardRef;
