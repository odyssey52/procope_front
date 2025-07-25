import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const MenuCircleVertical = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M16.75 13.5C16.0596 13.5 15.5 12.9404 15.5 12.25C15.5 11.5596 16.0596 11 16.75 11C17.4404 11 18 11.5596 18 12.25C18 12.9404 17.4404 13.5 16.75 13.5Z"
      fill="currentColor"
    />
    <path
      d="M11.75 13.5C11.0596 13.5 10.5 12.9404 10.5 12.25C10.5 11.5596 11.0596 11 11.75 11C12.4404 11 13 11.5596 13 12.25C13 12.9404 12.4404 13.5 11.75 13.5Z"
      fill="currentColor"
    />
    <path
      d="M6.75 13.5C6.05964 13.5 5.5 12.9404 5.5 12.25C5.5 11.5596 6.05964 11 6.75 11C7.44036 11 8 11.5596 8 12.25C8 12.9404 7.44036 13.5 6.75 13.5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MenuCircleVertical);
export default ForwardRef;
