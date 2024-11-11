import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNaver = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size} ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#03CF5D"
        d="M12.382 23.993c6.624-.21 11.823-5.751 11.612-12.375C23.784 4.994 18.245-.205 11.62.005 4.995.215-.204 5.756.007 12.38c.21 6.624 5.75 11.823 12.375 11.613"
      />
      <path fill="#fff" d="M13.931 12.38 9.91 6.601H6.575V17.4h3.494v-5.78l4.022 5.78h3.334V6.6h-3.494z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24.001v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgNaver);
export default ForwardRef;
