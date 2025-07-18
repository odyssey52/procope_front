import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Bookmark = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6 2.75C5.30964 2.75 4.75 3.30964 4.75 4V6.25H19.25V4C19.25 3.30964 18.6904 2.75 18 2.75H6ZM20.75 4C20.75 2.48122 19.5188 1.25 18 1.25H6C4.48122 1.25 3.25 2.48122 3.25 4V18C3.25 20.2661 5.8371 21.5597 7.65 20.2L11.25 17.5C11.6944 17.1667 12.3056 17.1667 12.75 17.5L16.35 20.2C18.1629 21.5597 20.75 20.2661 20.75 18V4ZM19.25 7.75H4.75V18C4.75 19.0301 5.92595 19.618 6.75 19L10.35 16.3C11.3278 15.5667 12.6722 15.5667 13.65 16.3L17.25 19C18.074 19.618 19.25 19.0301 19.25 18V7.75Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Bookmark);
export default ForwardRef;
