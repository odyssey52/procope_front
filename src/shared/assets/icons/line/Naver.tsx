import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Naver = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_233_1366)">
      <path
        d="M12.3817 23.993C19.0057 23.7825 24.205 18.242 23.9945 11.6179C23.784 4.99387 18.2435 -0.20537 11.6194 0.00511467C4.99536 0.215599 -0.20388 5.7561 0.00660408 12.3802C0.217089 19.0043 5.75759 24.2035 12.3817 23.993Z"
        fill="#03CF5D"
      />
      <path
        d="M13.9311 12.3803L9.90958 6.6012H6.5752V17.3987H10.0685V11.6196L14.091 17.3987H17.4253V6.6012H13.9311V12.3803Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_233_1366">
        <rect width={24.001} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(Naver);
export default ForwardRef;
