import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUserBlock = (
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
      d="M5.386 15.696C4.199 16.29 3.75 16.97 3.75 17.5s.449 1.21 1.636 1.804c1.142.571 2.772.946 4.614.946s3.472-.375 4.614-.946c1.187-.593 1.636-1.275 1.636-1.804s-.449-1.21-1.636-1.804c-1.142-.571-2.772-.946-4.614-.946s-3.472.375-4.614.946m-.671-1.342C6.106 13.66 7.975 13.25 10 13.25c2.024 0 3.894.409 5.285 1.104 1.347.674 2.465 1.742 2.465 3.146s-1.118 2.473-2.465 3.146c-1.391.695-3.26 1.104-5.285 1.104-2.024 0-3.894-.409-5.285-1.104-1.347-.674-2.465-1.742-2.465-3.146s1.118-2.472 2.465-3.146M10 3.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M5.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M19 8.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M15.25 11a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.03 8.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserBlock);
export default ForwardRef;
