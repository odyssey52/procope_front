import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const CheckCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM16.4605 8.40799C16.7874 8.66229 16.8463 9.13349 16.592 9.46045L12.585 14.6123C11.9613 15.4142 10.7881 15.5183 10.033 14.8387L7.49828 12.5575C7.19039 12.2804 7.16544 11.8062 7.44253 11.4983C7.71962 11.1904 8.19384 11.1654 8.50172 11.4425L11.0364 13.7237C11.1443 13.8208 11.3119 13.806 11.401 13.6914L15.408 8.53954C15.6623 8.21258 16.1335 8.15368 16.4605 8.40799Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckCircle);
export default ForwardRef;
