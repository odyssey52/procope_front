import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDelivery = (
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
      d="M1.25 7A4.75 4.75 0 0 1 6 2.25h4a4.75 4.75 0 0 1 4.691 4h2.518a2.75 2.75 0 0 1 1.88.744l2.792 2.616c.554.52.869 1.246.869 2.007V17c0 1.288-.886 2.37-2.082 2.668a2.751 2.751 0 0 1-5.314.082H9.646a2.751 2.751 0 0 1-5.363-.32A4.75 4.75 0 0 1 1.25 15zm3.239 10.878a2.75 2.75 0 0 1 5.157.372h3.604V7A3.25 3.25 0 0 0 10 3.75H6A3.25 3.25 0 0 0 2.75 7v8a3.25 3.25 0 0 0 1.739 2.878m10.261.372h.604a2.751 2.751 0 0 1 5.245-.152A1.25 1.25 0 0 0 21.25 17v-5.383a1.25 1.25 0 0 0-.395-.913l-2.791-2.616a1.25 1.25 0 0 0-.855-.338H14.75zM7 17.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m11 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDelivery);
export default ForwardRef;
