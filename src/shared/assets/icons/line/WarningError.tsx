import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const WarningError = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.31646 3.79466C10.4898 1.73512 13.5104 1.73511 14.6838 3.79466L22.3559 17.2611C23.5177 19.3003 21.9872 21.75 19.6722 21.75H4.32802C2.01304 21.75 0.482597 19.3003 1.64434 17.2612L9.31646 3.79466ZM13.3805 4.53718C12.7825 3.48761 11.2177 3.4876 10.6198 4.53719L2.94767 18.0037C2.38788 18.9862 3.09814 20.25 4.32802 20.25H19.6722C20.9021 20.25 21.6124 18.9862 21.0526 18.0037L13.3805 4.53718ZM12.0001 8.24997C12.4143 8.24997 12.7501 8.58576 12.7501 8.99997V14C12.7501 14.4142 12.4143 14.75 12.0001 14.75C11.5859 14.75 11.2501 14.4142 11.2501 14V8.99997C11.2501 8.58576 11.5859 8.24997 12.0001 8.24997Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(WarningError);
export default ForwardRef;
