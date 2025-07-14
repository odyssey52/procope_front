import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const NightMode = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M10.0557 2.46969C10.2514 2.66533 10.3234 2.95279 10.2432 3.21757C10.008 3.99328 9.88135 4.81699 9.88135 5.67165C9.88135 10.3368 13.6632 14.1187 18.3284 14.1187C19.183 14.1187 20.0067 13.992 20.7825 13.7569C21.0472 13.6766 21.3347 13.7487 21.5303 13.9443C21.726 14.1399 21.798 14.4274 21.7178 14.6922C20.48 18.776 16.6868 21.75 12.197 21.75C6.70343 21.75 2.25 17.2966 2.25 11.803C2.25 7.31322 5.22404 3.52004 9.30785 2.28226C9.57263 2.20201 9.86009 2.27405 10.0557 2.46969ZM8.48786 4.21154C5.68163 5.58526 3.75 8.4693 3.75 11.803C3.75 16.4682 7.53186 20.25 12.197 20.25C15.5307 20.25 18.4148 18.3184 19.7885 15.5122C19.3117 15.5823 18.8241 15.6187 18.3284 15.6187C12.8348 15.6187 8.38135 11.1652 8.38135 5.67165C8.38135 5.17593 8.41767 4.68836 8.48786 4.21154Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(NightMode);
export default ForwardRef;
