import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Bookmark = (
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
      d="M6 2.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V4c0-.69-.56-1.25-1.25-1.25zM20.75 4A2.75 2.75 0 0 0 18 1.25H6A2.75 2.75 0 0 0 3.25 4v14c0 2.266 2.587 3.56 4.4 2.2l3.6-2.7a1.25 1.25 0 0 1 1.5 0l3.6 2.7c1.813 1.36 4.4.066 4.4-2.2zm-1.5 3.75H4.75V18c0 1.03 1.176 1.618 2 1l3.6-2.7a2.75 2.75 0 0 1 3.3 0l3.6 2.7c.824.618 2 .03 2-1z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Bookmark);
export default ForwardRef;
