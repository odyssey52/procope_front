import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBrightness = (
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
      d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m0 5.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M5.25 12a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0M2.69 6.625a.75.75 0 0 1 1.024-.275l.867.5a.75.75 0 0 1-.75 1.3l-.867-.5a.75.75 0 0 1-.274-1.025m18.62 0a.75.75 0 0 1-.275 1.025l-.866.5a.75.75 0 1 1-.75-1.3l.866-.5a.75.75 0 0 1 1.024.275m-16.455 9.5a.75.75 0 0 1-.274 1.024l-.867.5a.75.75 0 0 1-.75-1.299l.867-.5a.75.75 0 0 1 1.024.275m14.29 0a.75.75 0 0 1 1.024-.274l.866.5a.75.75 0 0 1-.75 1.299l-.866-.5a.75.75 0 0 1-.275-1.025M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBrightness);
export default ForwardRef;
