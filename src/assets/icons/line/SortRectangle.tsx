import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SortRectangle = (
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
      d="M13.25 6A2.75 2.75 0 0 1 16 3.25h2A2.75 2.75 0 0 1 20.75 6v2A2.75 2.75 0 0 1 18 10.75h-2A2.75 2.75 0 0 1 13.25 8zM16 4.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zm-9.75.26q-.099.074-.184.17L4.56 6.873a.75.75 0 1 1-1.122-.996l1.506-1.694a2.75 2.75 0 0 1 4.11 0l1.506 1.694-1.122.996L7.934 5.18a1.3 1.3 0 0 0-.184-.17v13.98a1.3 1.3 0 0 0 .184-.17l1.505-1.693a.75.75 0 0 1 1.122.996l-1.506 1.694a2.75 2.75 0 0 1-4.11 0l-1.506-1.694a.75.75 0 0 1 1.122-.996l1.505 1.693q.085.096.184.17zm7 10.99A2.75 2.75 0 0 1 16 13.25h2A2.75 2.75 0 0 1 20.75 16v2A2.75 2.75 0 0 1 18 20.75h-2A2.75 2.75 0 0 1 13.25 18zM16 14.75c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SortRectangle);
export default ForwardRef;
