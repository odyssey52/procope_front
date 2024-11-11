import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgIdea = (
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
      d="M12 2.75a6.25 6.25 0 0 0-4.293 10.792c.58.548 1.043 1.332 1.043 2.247v1.461h2.5v-5.94L9.47 9.53a.75.75 0 0 1 1.06-1.06L12 9.94l1.47-1.47a.75.75 0 1 1 1.06 1.06l-1.78 1.78v5.94h2.5v-1.461c0-.915.464-1.699 1.043-2.247A6.25 6.25 0 0 0 12 2.75m3.163 16H8.837a3.251 3.251 0 0 0 6.326 0M4.25 9a7.75 7.75 0 1 1 13.074 5.632c-.37.35-.574.764-.574 1.157V18a4.75 4.75 0 1 1-9.5 0v-2.211c0-.393-.203-.806-.574-1.157A7.73 7.73 0 0 1 4.25 9"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIdea);
export default ForwardRef;
