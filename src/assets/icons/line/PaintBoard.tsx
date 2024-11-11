import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPaintBoard = (
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
      d="M12 2.75a9.25 9.25 0 0 0-1.839 18.317c.515.104 1.089-.325 1.089-1.067v-3.556a2.972 2.972 0 0 1 5.944 0v1.29c0 .476.248.819.52.967.244.133.533.133.812-.146A9.22 9.22 0 0 0 21.25 12 9.25 9.25 0 0 0 12 2.75M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12a10.72 10.72 0 0 1-3.166 7.618c-.772.77-1.79.835-2.587.4-.77-.419-1.303-1.277-1.303-2.285v-1.289a1.472 1.472 0 0 0-2.944 0V20c0 1.467-1.235 2.87-2.885 2.538C4.95 21.547 1.25 17.206 1.25 12m6-4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M14.75 10a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M17 9.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M5.75 15.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M8 14.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPaintBoard);
export default ForwardRef;
