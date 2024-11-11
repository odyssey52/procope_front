import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFolderShare = (
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
      d="M5 2.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25V5.5c0-.69-.56-1.25-1.25-1.25H9.667a2.75 2.75 0 0 1-1.65-.55L7.083 3a1.25 1.25 0 0 0-.75-.25zM2.25 4A2.75 2.75 0 0 1 5 1.25h1.333a2.75 2.75 0 0 1 1.65.55l.934.7c.216.162.48.25.75.25H11a2.75 2.75 0 0 1 2.75 2.75V8A2.75 2.75 0 0 1 11 10.75H5A2.75 2.75 0 0 1 2.25 8zm13 2a.75.75 0 0 1 .75-.75h1A2.75 2.75 0 0 1 19.75 8v4.5a.75.75 0 0 1-1.5 0V8c0-.69-.56-1.25-1.25-1.25h-1a.75.75 0 0 1-.75-.75M5 12.25a.75.75 0 0 1 .75.75v3c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 1 0 1.5H7A2.75 2.75 0 0 1 4.25 16v-3a.75.75 0 0 1 .75-.75m8 2.5c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-1.333a2.75 2.75 0 0 1-1.65-.55l-.934-.7a1.25 1.25 0 0 0-.75-.25zM10.25 16A2.75 2.75 0 0 1 13 13.25h1.333a2.75 2.75 0 0 1 1.65.55l.934.7c.216.162.48.25.75.25H19a2.75 2.75 0 0 1 2.75 2.75V20A2.75 2.75 0 0 1 19 22.75h-6A2.75 2.75 0 0 1 10.25 20z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderShare);
export default ForwardRef;
