import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const FlashLight = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M5.25 2.85714C5.25 1.96954 5.96954 1.25 6.85714 1.25H17.1429C18.0305 1.25 18.75 1.96954 18.75 2.85714C18.75 5.06144 17.5397 6.98172 15.75 7.99208V19C15.75 21.0711 14.0711 22.75 12 22.75C9.92893 22.75 8.25 21.0711 8.25 19V7.99208C6.46027 6.98172 5.25 5.06144 5.25 2.85714ZM6.85714 2.75C6.79797 2.75 6.75 2.79797 6.75 2.85714C6.75 4.62888 7.79891 6.1572 9.31285 6.85204C9.57924 6.97431 9.75 7.24056 9.75 7.53368V19C9.75 20.2426 10.7574 21.25 12 21.25C13.2426 21.25 14.25 20.2426 14.25 19V7.53368C14.25 7.24056 14.4208 6.97431 14.6872 6.85204C16.2011 6.1572 17.25 4.62888 17.25 2.85714C17.25 2.79797 17.202 2.75 17.1429 2.75H6.85714Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11C12.75 11.4142 12.4142 11.75 12 11.75C11.5858 11.75 11.25 11.4142 11.25 11V9C11.25 8.58579 11.5858 8.25 12 8.25Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(FlashLight);
export default ForwardRef;
