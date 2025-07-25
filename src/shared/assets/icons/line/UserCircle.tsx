import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const UserCircle = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.4212 3.67957 16.6247 5.20297 18.2741C6.52006 15.8764 9.06937 14.25 12 14.25C14.9306 14.25 17.4799 15.8764 18.797 18.2741C20.3204 16.6247 21.25 14.4212 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.6502 19.3244C16.6473 17.2103 14.4934 15.75 12 15.75C9.50664 15.75 7.35273 17.2103 6.34982 19.3244C7.91279 20.5321 9.87177 21.25 12 21.25C14.1282 21.25 16.0872 20.5321 17.6502 19.3244ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 15.2395 21.3161 18.145 19.051 20.1148C17.1639 21.7557 14.6971 22.75 12 22.75C9.30286 22.75 6.83607 21.7557 4.94902 20.1148C2.68387 18.145 1.25 15.2395 1.25 12ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75ZM8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(UserCircle);
export default ForwardRef;
