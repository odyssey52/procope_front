import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const MicMute = (
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
      d="M7.4 3.3a5.75 5.75 0 0 1 10.35 3.45v6a.75.75 0 0 1-1.5 0v-6A4.25 4.25 0 0 0 8.6 4.2a.75.75 0 0 1-1.2-.9M2.47 2.22a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-1.83-1.83a8.75 8.75 0 0 1-15.39-5.7v-2a.75.75 0 0 1 1.5 0v2a7.25 7.25 0 0 0 12.825 4.635l-1.067-1.066A5.75 5.75 0 0 1 6.25 13.75V7.062L2.47 3.28a.75.75 0 0 1 0-1.061m5.28 6.34v5.19a4.25 4.25 0 0 0 7.688 2.499zM20 11a.75.75 0 0 1 .75.75v2c0 .675-.076 1.333-.222 1.965a.75.75 0 0 1-1.462-.335c.12-.524.184-1.069.184-1.63v-2A.75.75 0 0 1 20 11"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(MicMute);
export default ForwardRef;
