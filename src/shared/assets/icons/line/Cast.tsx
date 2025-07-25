import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Cast = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 19C1.25 18.5858 1.58579 18.25 2 18.25C3.51878 18.25 4.75 19.4812 4.75 21C4.75 21.4142 4.41421 21.75 4 21.75C3.58579 21.75 3.25 21.4142 3.25 21C3.25 20.3096 2.69036 19.75 2 19.75C1.58579 19.75 1.25 19.4142 1.25 19Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 15C1.25 14.5858 1.58579 14.25 2 14.25C5.72792 14.25 8.75 17.2721 8.75 21C8.75 21.4142 8.41421 21.75 8 21.75C7.58579 21.75 7.25 21.4142 7.25 21C7.25 18.1005 4.89949 15.75 2 15.75C1.58579 15.75 1.25 15.4142 1.25 15Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 11C1.25 10.5858 1.58579 10.25 2 10.25C7.93706 10.25 12.75 15.0629 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 15.8914 7.10863 11.75 2 11.75C1.58579 11.75 1.25 11.4142 1.25 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3.75C4.20507 3.75 2.75 5.20507 2.75 7V7.42857C2.75 7.84279 2.41421 8.17857 2 8.17857C1.58579 8.17857 1.25 7.84279 1.25 7.42857V7C1.25 4.37665 3.37665 2.25 6 2.25H18C20.6234 2.25 22.75 4.37665 22.75 7V16C22.75 18.6234 20.6234 20.75 18 20.75H15.4C14.9858 20.75 14.65 20.4142 14.65 20C14.65 19.5858 14.9858 19.25 15.4 19.25H18C19.7949 19.25 21.25 17.7949 21.25 16V7C21.25 5.20507 19.7949 3.75 18 3.75H6Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Cast);
export default ForwardRef;
