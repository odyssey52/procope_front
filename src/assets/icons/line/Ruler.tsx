import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgRuler = (
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
      d="M17.706 3.176a1.455 1.455 0 0 0-2.058 0L3.176 15.648a1.455 1.455 0 0 0 0 2.058l3.118 3.118c.568.568 1.49.568 2.058 0l1.028-1.029-1.028-1.029a.75.75 0 0 1 1.06-1.06l1.029 1.029 2.057-2.058-1.028-1.029a.75.75 0 0 1 1.06-1.06l1.03 1.028 2.056-2.057-1.028-1.029a.75.75 0 1 1 1.06-1.06l1.03 1.028 2.057-2.057-1.03-1.029a.75.75 0 0 1 1.062-1.06l1.028 1.028 1.029-1.028a1.455 1.455 0 0 0 0-2.058zm2.624 7.79 1.555-1.554a2.955 2.955 0 0 0 0-4.178l-3.119-3.119a2.955 2.955 0 0 0-4.178 0L2.115 14.588a2.955 2.955 0 0 0 0 4.179l3.119 3.118a2.955 2.955 0 0 0 4.178 0l1.552-1.552.007-.007.008-.008 3.106-3.106.004-.005.005-.004 6.227-6.227.005-.005z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRuler);
export default ForwardRef;
