import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFolder = (
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
      d="M5.248 3.75c-1.353 0-2.498 1.148-2.498 2.625v11.25q.002.437.126.827l2.705-6.325C6.39 10.238 8.204 9 10.23 9h8.346v-.375C18.575 7.148 17.429 6 16.076 6h-3.353c-.717 0-1.42-.199-2.035-.574L8.52 4.104a2.4 2.4 0 0 0-1.253-.354zm14.827 5.26v-.385c0-2.25-1.764-4.125-3.999-4.125h-3.353c-.44 0-.872-.122-1.254-.354L9.301 2.824a3.9 3.9 0 0 0-2.034-.574H5.248c-2.235 0-3.998 1.874-3.998 4.125v11.25c0 2.25 1.763 4.125 3.998 4.125h9.459c1.799 0 3.451-.98 4.363-2.56l3.267-5.657c1.09-1.887-.105-4.35-2.262-4.523M3.912 19.843c.39.258.85.407 1.336.407h9.459c1.244 0 2.41-.678 3.064-1.81l3.268-5.658c.602-1.042-.15-2.282-1.208-2.282H10.23c-1.4 0-2.686.857-3.269 2.217z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolder);
export default ForwardRef;
