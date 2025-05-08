import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const Dollar = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 5.75C10.4812 5.75 9.25 6.98122 9.25 8.5C9.25 10.0188 10.4812 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C9.65279 12.75 7.75 10.8472 7.75 8.5C7.75 6.15279 9.65279 4.25 12 4.25C14.3472 4.25 16.25 6.15279 16.25 8.5C16.25 8.91421 15.9142 9.25 15.5 9.25C15.0858 9.25 14.75 8.91421 14.75 8.5C14.75 6.98122 13.5188 5.75 12 5.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C14.3472 11.25 16.25 13.1528 16.25 15.5C16.25 17.8472 14.3472 19.75 12 19.75C9.65279 19.75 7.75 17.8472 7.75 15.5C7.75 15.0858 8.08579 14.75 8.5 14.75C8.91421 14.75 9.25 15.0858 9.25 15.5C9.25 17.0188 10.4812 18.25 12 18.25C13.5188 18.25 14.75 17.0188 14.75 15.5C14.75 13.9812 13.5188 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V3C11.25 2.58579 11.5858 2.25 12 2.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Dollar);
export default ForwardRef;
