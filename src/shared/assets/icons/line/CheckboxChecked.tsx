import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const CheckboxChecked = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0001 1.66666H5.00008C3.15913 1.66666 1.66675 3.15905 1.66675 5V15C1.66675 16.8409 3.15913 18.3333 5.00008 18.3333H15.0001C16.841 18.3333 18.3334 16.8409 18.3334 15V5C18.3334 3.15905 16.841 1.66666 15.0001 1.66666ZM13.8268 7.88374C14.0387 7.61127 13.9896 7.2186 13.7171 7.00668C13.4447 6.79476 13.052 6.84385 12.8401 7.11631L9.50091 11.4095C9.42665 11.505 9.28699 11.5174 9.19709 11.4365L7.08486 9.53547C6.82829 9.30456 6.43311 9.32536 6.20219 9.58192C5.97128 9.83849 5.99208 10.2337 6.24865 10.4646L8.36089 12.3656C8.99016 12.9319 9.96783 12.8452 10.4876 12.177L13.8268 7.88374Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckboxChecked);
export default ForwardRef;
