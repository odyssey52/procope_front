import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Yen = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M5.25 11C5.25 10.5858 5.58579 10.25 6 10.25H18C18.4142 10.25 18.75 10.5858 18.75 11C18.75 11.4142 18.4142 11.75 18 11.75H6C5.58579 11.75 5.25 11.4142 5.25 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 15C5.25 14.5858 5.58579 14.25 6 14.25H18C18.4142 14.25 18.75 14.5858 18.75 15C18.75 15.4142 18.4142 15.75 18 15.75H6C5.58579 15.75 5.25 15.4142 5.25 15Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.55004 2.39998C5.88142 2.15145 6.35152 2.21861 6.60004 2.54998L12 9.74998L17.4 2.54998C17.6486 2.21861 18.1187 2.15145 18.45 2.39998C18.7814 2.64851 18.8486 3.11861 18.6 3.44998L12.6 11.45C12.4584 11.6388 12.2361 11.75 12 11.75C11.764 11.75 11.5417 11.6388 11.4 11.45L5.40004 3.44998C5.15152 3.11861 5.21867 2.64851 5.55004 2.39998Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V11C11.25 10.5858 11.5858 10.25 12 10.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Yen);
export default ForwardRef;
