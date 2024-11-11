import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMicrophoneMute = (
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
      d="M7.767 3.844A4.75 4.75 0 0 1 16.75 6v5.75a.75.75 0 0 1-1.5 0V6a3.25 3.25 0 0 0-6.147-1.474.75.75 0 0 1-1.336-.682M2.47 2.22a.75.75 0 0 1 1.06 0l13.806 13.806a.75.75 0 0 1 .53.53l3.664 3.664a.75.75 0 1 1-1.06 1.06l-3.41-3.41a7.7 7.7 0 0 1-4.31 1.844v1.536H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.536a7.75 7.75 0 0 1-7-7.714v-1a.75.75 0 0 1 1.5 0v1a6.25 6.25 0 0 0 10.246 4.806l-1.067-1.066A4.75 4.75 0 0 1 7.25 12V8.06L2.47 3.28a.75.75 0 0 1 0-1.06m6.28 7.34V12a3.25 3.25 0 0 0 5.107 2.668zm10.25.69a.75.75 0 0 1 .75.75v1c0 .91-.157 1.785-.447 2.598a.75.75 0 0 1-1.413-.503c.233-.654.36-1.359.36-2.095v-1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMicrophoneMute);
export default ForwardRef;
