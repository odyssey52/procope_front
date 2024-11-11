import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEyeDisable = (
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
      d="M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-2.275-2.275c-1.532.865-3.297 1.495-5.195 1.495-4.151 0-7.702-3.012-9.674-5.086a3.835 3.835 0 0 1 0-5.328c.828-.871 1.91-1.881 3.18-2.77L3.47 4.53a.75.75 0 0 1 0-1.06m3.114 4.175c-1.255.847-2.339 1.85-3.17 2.725a2.335 2.335 0 0 0 0 3.26c1.94 2.041 5.106 4.62 8.586 4.62 1.428 0 2.81-.434 4.089-1.1l-2.021-2.021a3.75 3.75 0 0 1-5.197-5.197zM9.97 11.03a2.25 2.25 0 0 0 3.001 3.001zm-.78-6.333A9.4 9.4 0 0 1 12 4.25c4.151 0 7.702 3.012 9.674 5.086a3.835 3.835 0 0 1 0 5.328c-.454.477-.982.994-1.574 1.51a.75.75 0 0 1-.985-1.132c.551-.48 1.045-.963 1.472-1.412.884-.93.884-2.33 0-3.26C18.647 8.329 15.48 5.75 12 5.75c-.805 0-1.596.138-2.363.378a.75.75 0 0 1-.449-1.431"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEyeDisable);
export default ForwardRef;
