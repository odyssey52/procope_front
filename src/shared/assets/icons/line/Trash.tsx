import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Trash = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M8.78223 2.47457C9.29226 1.70953 10.1509 1.25 11.0704 1.25H12.9296C13.8491 1.25 14.7077 1.70953 15.2178 2.47457L16.4014 4.25H21C21.4142 4.25 21.75 4.58579 21.75 5C21.75 5.41421 21.4142 5.75 21 5.75H3C2.58579 5.75 2.25 5.41421 2.25 5C2.25 4.58579 2.58579 4.25 3 4.25H7.59861L8.78223 2.47457ZM9.40139 4.25H14.5986L13.9697 3.30662C13.7379 2.95888 13.3476 2.75 12.9296 2.75H11.0704C10.6524 2.75 10.2621 2.95888 10.0303 3.30662L9.40139 4.25ZM5 7.25C5.41421 7.25 5.75 7.58579 5.75 8V18C5.75 19.7949 7.20507 21.25 9 21.25H15C16.7949 21.25 18.25 19.7949 18.25 18V8C18.25 7.58579 18.5858 7.25 19 7.25C19.4142 7.25 19.75 7.58579 19.75 8V18C19.75 20.6234 17.6234 22.75 15 22.75H9C6.37665 22.75 4.25 20.6234 4.25 18V8C4.25 7.58579 4.58579 7.25 5 7.25ZM10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17L9.25 11C9.25 10.5858 9.58579 10.25 10 10.25ZM14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V17C14.75 17.4142 14.4142 17.75 14 17.75C13.5858 17.75 13.25 17.4142 13.25 17V11C13.25 10.5858 13.5858 10.25 14 10.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Trash);
export default ForwardRef;
