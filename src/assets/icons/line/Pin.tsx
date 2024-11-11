import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Pin = (
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
      d="M10.159 5.042c0-2.484 3.003-3.728 4.76-1.971l6.01 6.01c1.757 1.757.513 4.76-1.971 4.76-.341 0-.67.136-.91.377l-1.689 1.688a1.3 1.3 0 0 0-.377.911c0 2.484-3.003 3.728-4.76 1.971l-2.475-2.475L3.53 21.53a.75.75 0 1 1-1.06-1.06l5.217-5.217-2.476-2.476C3.456 11.021 4.7 8.018 7.184 8.018c.341 0 .669-.136.91-.377l1.689-1.688c.241-.242.377-.57.377-.911m3.698-.91c-.81-.812-2.198-.237-2.198.91 0 .74-.294 1.448-.817 1.971L9.154 8.701a2.8 2.8 0 0 1-1.971.817c-1.148 0-1.722 1.387-.91 2.199l6.01 6.01c.812.812 2.199.238 2.199-.91 0-.74.294-1.448.817-1.971l1.688-1.688a2.79 2.79 0 0 1 1.971-.817c1.147 0 1.722-1.387.91-2.198z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Pin);
export default ForwardRef;
