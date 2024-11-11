import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Presentation = (
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
      d="M1.25 4A2.75 2.75 0 0 1 4 1.25h16a2.75 2.75 0 0 1 1.75 4.871V16A2.75 2.75 0 0 1 19 18.75h-6.25V22a.75.75 0 0 1-1.5 0v-3.25H5A2.75 2.75 0 0 1 2.25 16V6.121c-.61-.504-1-1.267-1-2.121M4 5.25h16a1.25 1.25 0 1 0 0-2.5H4a1.25 1.25 0 1 0 0 2.5m-.25 1.5V16c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V6.75zm12.636 2.607a.75.75 0 0 1 .257 1.029l-1.082 1.804a2.53 2.53 0 0 1-4.147.279 1.03 1.03 0 0 0-1.689.113l-1.082 1.804a.75.75 0 1 1-1.286-.772l1.082-1.804a2.53 2.53 0 0 1 4.147-.279 1.03 1.03 0 0 0 1.689-.113l1.082-1.804a.75.75 0 0 1 1.029-.257"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Presentation);
export default ForwardRef;
