import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLocation = (
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
      d="M12 2.75c-4.565 0-8.25 3.653-8.25 8.139 0 2.204 1.285 4.814 3.057 6.912.877 1.038 1.843 1.915 2.775 2.526.946.622 1.784.923 2.418.923s1.472-.3 2.418-.923c.932-.611 1.899-1.488 2.775-2.526 1.772-2.098 3.057-4.708 3.057-6.912 0-4.486-3.685-8.139-8.25-8.139m-9.75 8.139C2.25 5.557 6.624 1.25 12 1.25s9.75 4.307 9.75 9.639c0 2.705-1.528 5.65-3.411 7.88-.952 1.127-2.024 2.108-3.097 2.812-1.058.695-2.188 1.169-3.242 1.169s-2.185-.474-3.242-1.169c-1.072-.704-2.145-1.685-3.097-2.812-1.883-2.23-3.411-5.175-3.411-7.88M12 8.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 11a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;
