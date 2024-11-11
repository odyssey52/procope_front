import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgReloadCircle = (
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
      d="M13.509 5.303a.75.75 0 0 1 .974.42l.795 2.002a.75.75 0 0 1-1.065.93A4.5 4.5 0 0 0 12 8.084c-2.397 0-4.25 1.802-4.25 3.917q.002.519.138.995a.75.75 0 1 1-1.443.41A5.1 5.1 0 0 1 6.25 12c0-3.04 2.624-5.417 5.75-5.417q.651.002 1.262.131l-.173-.437a.75.75 0 0 1 .42-.974m3.12 4.776a.75.75 0 0 1 .926.516c.127.449.195.92.195 1.405 0 3.04-2.624 5.417-5.75 5.417q-.651-.002-1.262-.131l.173.437a.75.75 0 0 1-1.394.554l-.795-2.002a.75.75 0 0 1 1.066-.93 4.5 4.5 0 0 0 2.212.572c2.397 0 4.25-1.802 4.25-3.917q-.001-.518-.138-.995a.75.75 0 0 1 .516-.926"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgReloadCircle);
export default ForwardRef;
