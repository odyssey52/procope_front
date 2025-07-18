import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const File = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 5C1.25 2.92893 2.92893 1.25 5 1.25H15C17.0711 1.25 18.75 2.92893 18.75 5V7.25H20C21.5188 7.25 22.75 8.48122 22.75 10V20C22.75 21.5188 21.5188 22.75 20 22.75H5C2.92893 22.75 1.25 21.0711 1.25 19V5ZM20 21.25C20.6904 21.25 21.25 20.6904 21.25 20V10C21.25 9.30964 20.6904 8.75 20 8.75H18.75V20C18.75 20.6904 19.3096 21.25 20 21.25ZM17.5499 21.25H5C3.75736 21.25 2.75 20.2426 2.75 19V5C2.75 3.75736 3.75736 2.75 5 2.75H15C16.2426 2.75 17.25 3.75736 17.25 5V20C17.25 20.4501 17.3581 20.875 17.5499 21.25ZM5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H14C14.4142 6.25 14.75 6.58579 14.75 7C14.75 7.41421 14.4142 7.75 14 7.75H6C5.58579 7.75 5.25 7.41421 5.25 7ZM5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12ZM5.25 17C5.25 16.5858 5.58579 16.25 6 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H6C5.58579 17.75 5.25 17.4142 5.25 17Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(File);
export default ForwardRef;
