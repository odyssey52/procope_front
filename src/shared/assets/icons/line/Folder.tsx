import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Folder = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M5.24839 3.75C3.89534 3.75 2.75 4.89796 2.75 6.375V17.625C2.75 17.9155 2.7943 18.1932 2.87576 18.452L5.58125 12.1274C6.38945 10.2381 8.20426 9 10.2287 9H18.5747V8.625C18.5747 7.14796 17.4294 6 16.0763 6H12.7227C12.0056 6 11.3032 5.80111 10.6884 5.42631L8.5201 4.10447C8.13796 3.87151 7.70534 3.75 7.26659 3.75H5.24839ZM20.0747 9.00971V8.625C20.0747 6.37411 18.3114 4.5 16.0763 4.5H12.7227C12.2839 4.5 11.8513 4.37849 11.4692 4.14553L9.30088 2.82369C8.68606 2.44889 7.98372 2.25 7.26659 2.25H5.24839C3.01337 2.25 1.25 4.12411 1.25 6.375V17.625C1.25 19.8759 3.01337 21.75 5.24839 21.75H14.7069C16.5056 21.75 18.1583 20.7695 19.0703 19.1903L22.3375 13.5327C23.4272 11.6458 22.2322 9.18324 20.0747 9.00971ZM3.91246 19.8425C4.30179 20.1014 4.76165 20.25 5.24839 20.25H14.7069C15.9509 20.25 17.1178 19.5718 17.7713 18.4402L21.0386 12.7825C21.6406 11.74 20.8882 10.5 19.8311 10.5H10.2287C8.82986 10.5 7.5425 11.3565 6.96037 12.7174L3.91246 19.8425Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Folder);
export default ForwardRef;
