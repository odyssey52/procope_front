import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Euro = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M15.1667 4.75C11.0559 4.75 7.75 8.01044 7.75 12C7.75 15.9896 11.0559 19.25 15.1667 19.25C17.2472 19.25 19.124 18.4137 20.4698 17.0684C20.7627 16.7756 21.2376 16.7757 21.5304 17.0686C21.8233 17.3615 21.8232 17.8364 21.5302 18.1293C19.9114 19.7475 17.6564 20.75 15.1667 20.75C10.2568 20.75 6.25 16.847 6.25 12C6.25 7.15301 10.2568 3.25 15.1667 3.25C17.6564 3.25 19.9114 4.25247 21.5302 5.87074C21.8232 6.16359 21.8233 6.63846 21.5304 6.9314C21.2376 7.22435 20.7627 7.22443 20.4698 6.93158C19.124 5.58631 17.2472 4.75 15.1667 4.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 14C2.25 13.5858 2.58579 13.25 3 13.25L16 13.25C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75L3 14.75C2.58579 14.75 2.25 14.4142 2.25 14Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 10C2.25 9.58579 2.58579 9.25 3 9.25L16 9.25C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75L3 10.75C2.58579 10.75 2.25 10.4142 2.25 10Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Euro);
export default ForwardRef;
