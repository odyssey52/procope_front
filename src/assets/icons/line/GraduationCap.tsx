import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const GraduationCap = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12.559 6.11805C12.2071 5.9421 11.7929 5.9421 11.441 6.11805L3.67705 10L11.441 13.882C11.7929 14.0579 12.2071 14.0579 12.559 13.882L20.3229 10L12.559 6.11805ZM10.7702 4.77641C11.5444 4.38931 12.4556 4.38931 13.2298 4.77641L22.3354 9.3292C22.5895 9.45624 22.75 9.71594 22.75 10C22.75 10.2841 22.5895 10.5438 22.3354 10.6708L18.75 12.4635V16C18.75 18.0711 17.0711 19.75 15 19.75H9C6.92893 19.75 5.25 18.0711 5.25 16V12.4635L1.66459 10.6708C1.4105 10.5438 1.25 10.2841 1.25 10C1.25 9.71594 1.4105 9.45624 1.66459 9.3292L10.7702 4.77641ZM6.75 13.2135V16C6.75 17.2427 7.75736 18.25 9 18.25H15C16.2426 18.25 17.25 17.2427 17.25 16V13.2135L13.2298 15.2236C12.4556 15.6107 11.5444 15.6107 10.7702 15.2236L6.75 13.2135Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 9.25C22.4142 9.25 22.75 9.58579 22.75 10V16C22.75 16.4142 22.4142 16.75 22 16.75C21.5858 16.75 21.25 16.4142 21.25 16V10C21.25 9.58579 21.5858 9.25 22 9.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(GraduationCap);
export default ForwardRef;
