import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Receipt = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6.25 7C6.25 6.58579 6.58579 6.25 7 6.25L17 6.25C17.4142 6.25 17.75 6.58579 17.75 7C17.75 7.41421 17.4142 7.75 17 7.75L7 7.75C6.58579 7.75 6.25 7.41421 6.25 7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 11C6.25 10.5858 6.58579 10.25 7 10.25L17 10.25C17.4142 10.25 17.75 10.5858 17.75 11C17.75 11.4142 17.4142 11.75 17 11.75L7 11.75C6.58579 11.75 6.25 11.4142 6.25 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 15C6.25 14.5858 6.58579 14.25 7 14.25L12 14.25C12.4142 14.25 12.75 14.5858 12.75 15C12.75 15.4142 12.4142 15.75 12 15.75L7 15.75C6.58579 15.75 6.25 15.4142 6.25 15Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 4C2.25 2.48122 3.48122 1.25 5 1.25H19C20.5188 1.25 21.75 2.48122 21.75 4V19.1543C21.75 21.059 19.8606 22.3869 18.0685 21.7418L16.5068 21.1796C16.2017 21.0697 15.866 21.0827 15.5704 21.2158L13.1285 22.3146C12.4108 22.6376 11.5892 22.6376 10.8715 22.3146L8.4296 21.2158C8.13399 21.0827 7.79825 21.0697 7.49324 21.1796L5.93148 21.7418C4.13941 22.3869 2.25 21.059 2.25 19.1543V4ZM5 2.75C4.30964 2.75 3.75 3.30964 3.75 4V19.1543C3.75 20.0201 4.60882 20.6237 5.4234 20.3305L6.98517 19.7682C7.65618 19.5267 8.39479 19.5552 9.04515 19.8479L11.487 20.9467C11.8133 21.0935 12.1867 21.0935 12.513 20.9467L14.9549 19.8479C15.6052 19.5552 16.3438 19.5267 17.0148 19.7682L18.5766 20.3305C19.3912 20.6237 20.25 20.0201 20.25 19.1543V4C20.25 3.30964 19.6904 2.75 19 2.75H5Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Receipt);
export default ForwardRef;
