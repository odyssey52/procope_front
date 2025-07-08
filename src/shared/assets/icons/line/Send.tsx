import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Send = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M2.15188 7.77807C0.130724 5.64402 1.72159 2.25 4.61116 2.25H19.3896C22.1484 2.25 23.7796 5.37776 22.0327 7.56675L11.7258 20.4824C9.78667 22.9123 5.72695 21.6253 5.72695 18.4553V12.247C5.72695 11.803 5.55553 11.3718 5.24136 11.0401L2.15188 7.77807ZM4.61116 3.75C2.95751 3.75 2.18052 5.62694 3.24095 6.74661L6.33044 10.0087C6.90492 10.6152 7.22695 11.4142 7.22695 12.247V18.4553C7.22695 20.1217 9.44606 20.9344 10.5534 19.5467L20.8603 6.63113C21.776 5.48366 20.9677 3.75 19.3896 3.75H4.61116Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Send);
export default ForwardRef;
