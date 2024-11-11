import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFilePdf = (
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
      d="M7 1.25h4.343c1.26 0 2.468.5 3.359 1.391l5.657 5.657a4.75 4.75 0 0 1 1.391 3.359V18A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18V6A4.75 4.75 0 0 1 7 1.25m4.343 1.5H7A3.25 3.25 0 0 0 3.75 6v12A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18v-6.343q0-.467-.13-.907H17A4.75 4.75 0 0 1 12.25 6V2.88a3.3 3.3 0 0 0-.907-.13m2.407 1.06V6A3.25 3.25 0 0 0 17 9.25h2.19z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6.437 18v-4.295h1.391q.79 0 1.031.065.37.097.619.421t.249.835q0 .396-.144.665-.144.27-.366.425a1.3 1.3 0 0 1-.448.202 5 5 0 0 1-.9.062h-.565V18zm.867-3.568v1.218h.474q.512 0 .686-.067a.571.571 0 0 0 .37-.545.56.56 0 0 0-.139-.387.6.6 0 0 0-.348-.19 4 4 0 0 0-.624-.03zM10.436 13.705h1.585q.536 0 .817.082.378.111.647.396.27.285.41.697.141.41.141 1.014 0 .53-.132.914-.16.468-.46.758-.225.22-.609.343-.287.09-.768.091h-1.632zm.867.727v2.844h.647q.363 0 .525-.04a.8.8 0 0 0 .348-.18q.14-.125.229-.412.087-.29.088-.788 0-.499-.088-.765a1 1 0 0 0-.246-.416.83.83 0 0 0-.402-.202q-.18-.041-.712-.041zM14.78 18v-4.295h2.945v.727h-2.078v1.016h1.793v.727h-1.793V18z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFilePdf);
export default ForwardRef;
