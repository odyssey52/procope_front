import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Widgets = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size} ref={ref} {...props}>
    <g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path d="M1.25 16A2.75 2.75 0 0 1 4 13.25h4A2.75 2.75 0 0 1 10.75 16v4A2.75 2.75 0 0 1 8 22.75H4A2.75 2.75 0 0 1 1.25 20zM4 14.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25zM1.25 4A2.75 2.75 0 0 1 4 1.25h4A2.75 2.75 0 0 1 10.75 4v4A2.75 2.75 0 0 1 8 10.75H4A2.75 2.75 0 0 1 1.25 8zM4 2.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25zM13.25 16A2.75 2.75 0 0 1 16 13.25h4A2.75 2.75 0 0 1 22.75 16v4A2.75 2.75 0 0 1 20 22.75h-4A2.75 2.75 0 0 1 13.25 20zM16 14.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25zM12.57 8.601a2.75 2.75 0 0 1 0-3.889l2.829-2.828a2.75 2.75 0 0 1 3.889 0l2.828 2.828a2.75 2.75 0 0 1 0 3.89l-2.828 2.828a2.75 2.75 0 0 1-3.89 0zm1.06-2.828a1.25 1.25 0 0 0 0 1.768l2.83 2.828a1.25 1.25 0 0 0 1.767 0l2.828-2.828a1.25 1.25 0 0 0 0-1.768l-2.828-2.828a1.25 1.25 0 0 0-1.768 0z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(Widgets);
export default ForwardRef;
