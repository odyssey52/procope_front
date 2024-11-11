import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPencil = (
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
      d="M15.712 3.286a3.537 3.537 0 0 1 5.002 5.002L9.26 19.743a4.7 4.7 0 0 1-2.446 1.295l-3.673.699a.75.75 0 0 1-.877-.877l.7-3.673a4.7 4.7 0 0 1 1.294-2.446zm3.941 1.06a2.037 2.037 0 0 0-2.88 0l-1.405 1.406 2.88 2.88 1.405-1.405a2.037 2.037 0 0 0 0-2.88m-2.465 5.347-2.881-2.88-8.99 8.99a3.2 3.2 0 0 0-.881 1.665l-.493 2.589 2.59-.493a3.2 3.2 0 0 0 1.665-.881z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;
