import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Layers = (
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
      d="M10.77 1.776a2.75 2.75 0 0 1 2.46 0l7.317 3.659c1.29.645 1.29 2.485 0 3.13l-7.317 3.659a2.75 2.75 0 0 1-2.46 0L3.454 8.565c-1.29-.645-1.29-2.485 0-3.13l.335.67-.335-.67zm1.79 1.342a1.25 1.25 0 0 0-1.119 0L4.124 6.776a.25.25 0 0 0 0 .448l7.317 3.658a1.25 1.25 0 0 0 1.118 0l7.317-3.658a.25.25 0 0 0 0-.448zM2.314 12.695a.75.75 0 0 1 .99-.38l8.188 3.639a1.25 1.25 0 0 0 1.015 0l8.188-3.64a.75.75 0 1 1 .609 1.371l-8.188 3.64a2.75 2.75 0 0 1-2.234 0l-8.187-3.64a.75.75 0 0 1-.381-.99m0 5a.75.75 0 0 1 .99-.38l8.188 3.639a1.25 1.25 0 0 0 1.015 0l8.188-3.64a.75.75 0 1 1 .609 1.371l-8.188 3.64a2.75 2.75 0 0 1-2.234 0l-8.187-3.64a.75.75 0 0 1-.381-.99"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Layers);
export default ForwardRef;
