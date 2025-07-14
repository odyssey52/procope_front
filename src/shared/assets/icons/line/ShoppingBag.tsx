import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const ShoppingBag = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M7.2926 5.36185C7.60433 3.04026 9.59315 1.25 12.0001 1.25C14.4071 1.25 16.3959 3.04027 16.7076 5.36186C18.5331 5.7654 19.9926 7.22353 20.349 9.12463L21.849 17.1246C22.3971 20.0478 20.1546 22.75 17.1804 22.75H6.8198C3.84565 22.75 1.60306 20.0478 2.15116 17.1246L3.65116 9.12463C4.00762 7.22353 5.46708 5.7654 7.2926 5.36185ZM8.83706 5.25H15.1631C14.8246 3.81665 13.5369 2.75 12.0001 2.75C10.4633 2.75 9.17565 3.81665 8.83706 5.25ZM8.3198 6.75C6.75586 6.75 5.41369 7.8639 5.12547 9.40106L3.62547 17.4011C3.25045 19.4012 4.78486 21.25 6.8198 21.25H17.1804C19.2153 21.25 20.7497 19.4012 20.3747 17.4011L18.8747 9.40106C18.5865 7.8639 17.2443 6.75 15.6804 6.75H8.3198Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag);
export default ForwardRef;
