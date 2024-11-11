import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Chatting = (
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
      d="M1.25 10.875c0-4.755 3.81-8.625 8.528-8.625h1.11c3.38 0 6.223 2.283 7.121 5.395a8.64 8.64 0 0 1 4.741 7.73v3.375c0 1.648-1.322 3-2.972 3H13.11c-3.046 0-5.657-1.856-6.8-4.5H4.223c-1.65 0-2.972-1.352-2.972-3zm6.736 6.375c1.024 1.797 2.94 3 5.125 3h6.667c.804 0 1.472-.663 1.472-1.5v-3.375a7.15 7.15 0 0 0-2.947-5.801q.003.087.003.176c0 4.133-3.312 7.5-7.417 7.5zm1.792-13.5c-3.873 0-7.028 3.181-7.028 7.125v3.375c0 .837.668 1.5 1.472 1.5h6.667c3.259 0 5.917-2.677 5.917-6q-.002-.729-.163-1.405c-.625-2.642-2.97-4.595-5.754-4.595z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Chatting);
export default ForwardRef;
