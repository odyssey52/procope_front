import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const ArrowDownCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4697 16.5303C11.7626 16.8232 12.2374 16.8232 12.5303 16.5303L15.5303 13.5303C15.8232 13.2374 15.8232 12.7626 15.5303 12.4697C15.2374 12.1768 14.7626 12.1768 14.4697 12.4697L12.75 14.1893V8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V14.1893L9.53033 12.4697C9.23744 12.1768 8.76256 12.1768 8.46967 12.4697C8.17678 12.7626 8.17678 13.2374 8.46967 13.5303L11.4697 16.5303Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowDownCircle);
export default ForwardRef;
