import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Widgets = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_48_3275)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 16C1.25 14.4812 2.48122 13.25 4 13.25H8C9.51878 13.25 10.75 14.4812 10.75 16V20C10.75 21.5188 9.51878 22.75 8 22.75H4C2.48122 22.75 1.25 21.5188 1.25 20V16ZM4 14.75C3.30964 14.75 2.75 15.3096 2.75 16V20C2.75 20.6904 3.30964 21.25 4 21.25H8C8.69036 21.25 9.25 20.6904 9.25 20V16C9.25 15.3096 8.69036 14.75 8 14.75H4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 4C1.25 2.48122 2.48122 1.25 4 1.25H8C9.51878 1.25 10.75 2.48122 10.75 4V8C10.75 9.51878 9.51878 10.75 8 10.75H4C2.48122 10.75 1.25 9.51878 1.25 8V4ZM4 2.75C3.30964 2.75 2.75 3.30964 2.75 4V8C2.75 8.69036 3.30964 9.25 4 9.25H8C8.69036 9.25 9.25 8.69036 9.25 8V4C9.25 3.30964 8.69036 2.75 8 2.75H4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.25 16C13.25 14.4812 14.4812 13.25 16 13.25H20C21.5188 13.25 22.75 14.4812 22.75 16V20C22.75 21.5188 21.5188 22.75 20 22.75H16C14.4812 22.75 13.25 21.5188 13.25 20V16ZM16 14.75C15.3096 14.75 14.75 15.3096 14.75 16V20C14.75 20.6904 15.3096 21.25 16 21.25H20C20.6904 21.25 21.25 20.6904 21.25 20V16C21.25 15.3096 20.6904 14.75 20 14.75H16Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.57 8.6014C11.4961 7.52746 11.4961 5.78626 12.57 4.71232L15.3985 1.88389C16.4724 0.809948 18.2136 0.809949 19.2875 1.88389L22.116 4.71232C23.1899 5.78626 23.1899 7.52746 22.116 8.6014L19.2875 11.4298C18.2136 12.5038 16.4724 12.5038 15.3985 11.4298L12.57 8.6014ZM13.6307 5.77298C13.1425 6.26113 13.1425 7.05259 13.6307 7.54074L16.4591 10.3692C16.9473 10.8573 17.7387 10.8573 18.2269 10.3692L21.0553 7.54074C21.5435 7.05259 21.5435 6.26113 21.0553 5.77298L18.2269 2.94455C17.7387 2.45639 16.9473 2.45639 16.4591 2.94455L13.6307 5.77298Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_48_3275">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(Widgets);
export default ForwardRef;
