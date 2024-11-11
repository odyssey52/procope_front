import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Bank = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size} ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.434 1.734a2.78 2.78 0 0 1 3.132 0l8.395 5.717c1.43.973.801 3.299-.994 3.299H3.033c-1.795 0-2.423-2.326-.994-3.3zm2.288 1.24a1.28 1.28 0 0 0-1.444 0L2.883 8.69c-.119.08-.16.207-.118.348.021.07.06.124.1.158a.25.25 0 0 0 .168.053h17.934a.25.25 0 0 0 .168-.053.3.3 0 0 0 .1-.158c.042-.14.001-.267-.118-.348z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.25 9.25h6.5v9.5h-6.5zm1.5 1.5v6.5h3.5v-6.5zM14.25 9.25h6.5v9.5h-6.5zm1.5 1.5v6.5h3.5v-6.5z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.382 21.25a.25.25 0 0 0 .224-.362l-1-2a.25.25 0 0 0-.224-.138H4.618a.25.25 0 0 0-.224.138l-1 2a.25.25 0 0 0 .224.362zm1.565-1.033a1.75 1.75 0 0 1-1.565 2.533H3.618a1.75 1.75 0 0 1-1.565-2.533l1-2a1.75 1.75 0 0 1 1.565-.967h14.764a1.75 1.75 0 0 1 1.565.967z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Bank);
export default ForwardRef;
