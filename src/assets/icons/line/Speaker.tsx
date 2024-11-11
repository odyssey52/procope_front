import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSpeaker = (
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
      d="M14.25 6.003c0-1.029-1.176-1.618-2-1l-4.267 3.2a2.75 2.75 0 0 1-1.65.549H4c-.69 0-1.25.56-1.25 1.249v3.998c0 .69.56 1.25 1.25 1.25h2.334a2.75 2.75 0 0 1 1.65.549l4.266 3.199c.824.618 2 .029 2-1zm-2.9-2.2c1.813-1.358 4.4-.066 4.4 2.2v11.994c0 2.266-2.588 3.558-4.4 2.2l-4.267-3.199a1.25 1.25 0 0 0-.75-.25H4A2.75 2.75 0 0 1 1.25 14v-3.998A2.75 2.75 0 0 1 4 7.25h2.334c.27 0 .533-.087.75-.249zm5.915 3.148a.75.75 0 0 1 .884-.586 5.752 5.752 0 0 1 0 11.27.75.75 0 0 1-.298-1.47 4.252 4.252 0 0 0 0-8.33.75.75 0 0 1-.586-.884m.086 2.941a.75.75 0 0 1 1.024-.274 2.749 2.749 0 0 1 0 4.764.75.75 0 1 1-.75-1.299 1.25 1.25 0 0 0 0-2.166.75.75 0 0 1-.274-1.025"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSpeaker);
export default ForwardRef;
