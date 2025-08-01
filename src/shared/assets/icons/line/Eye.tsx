import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Eye = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 5.75C8.51999 5.75 5.35328 8.32869 3.41334 10.3698C2.52889 11.3004 2.52889 12.6996 3.41334 13.6302C5.35328 15.6713 8.51999 18.25 12 18.25C15.48 18.25 18.6467 15.6713 20.5867 13.6302C21.4711 12.6996 21.4711 11.3004 20.5867 10.3698C18.6467 8.32869 15.48 5.75 12 5.75ZM2.32608 9.33641C4.2977 7.26198 7.84898 4.25 12 4.25C16.151 4.25 19.7023 7.26198 21.6739 9.33641C23.1087 10.846 23.1087 13.154 21.6739 14.6636C19.7023 16.738 16.151 19.75 12 19.75C7.84898 19.75 4.2977 16.738 2.32608 14.6636C0.891308 13.154 0.891308 10.846 2.32608 9.33641ZM12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Eye);
export default ForwardRef;
