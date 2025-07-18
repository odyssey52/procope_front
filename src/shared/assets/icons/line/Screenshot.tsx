import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Screenshot = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M6.25 9C6.25 7.48122 7.48122 6.25 9 6.25H15C16.5188 6.25 17.75 7.48122 17.75 9V15C17.75 16.5188 16.5188 17.75 15 17.75H9C7.48122 17.75 6.25 16.5188 6.25 15V9ZM9 7.75C8.30964 7.75 7.75 8.30964 7.75 9V15C7.75 15.6904 8.30964 16.25 9 16.25H15C15.6904 16.25 16.25 15.6904 16.25 15V9C16.25 8.30964 15.6904 7.75 15 7.75H9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25H9C9.41421 2.25 9.75 2.58579 9.75 3C9.75 3.41421 9.41421 3.75 9 3.75H5C4.30964 3.75 3.75 4.30964 3.75 5V9C3.75 9.41421 3.41421 9.75 3 9.75C2.58579 9.75 2.25 9.41421 2.25 9V5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.75 19C21.75 20.5188 20.5188 21.75 19 21.75L15 21.75C14.5858 21.75 14.25 21.4142 14.25 21C14.25 20.5858 14.5858 20.25 15 20.25L19 20.25C19.6904 20.25 20.25 19.6904 20.25 19L20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15L21.75 19Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Screenshot);
export default ForwardRef;
