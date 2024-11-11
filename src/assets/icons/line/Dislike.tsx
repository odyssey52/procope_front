import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Dislike = (
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
      d="M3.515 5.848A4.75 4.75 0 0 1 8.123 2.25h3.666a4.75 4.75 0 0 1 2.635.798l1.547 1.031.037.025A2.74 2.74 0 0 1 18 3.25h2A2.75 2.75 0 0 1 22.75 6v7A2.75 2.75 0 0 1 20 15.75h-2c-.674 0-1.29-.242-1.768-.644l-3.581 6.266a.75.75 0 0 1-.651.378H10.67c-2.596 0-4.144-2.893-2.704-5.053l.631-.947H4.561a2.75 2.75 0 0 1-2.667-3.417zM16.75 13c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25zm-1.5-7.465a.25.25 0 0 0-.111-.208l-1.547-1.031a3.25 3.25 0 0 0-1.803-.546H8.123A3.25 3.25 0 0 0 4.97 6.212l-1.621 6.485A1.25 1.25 0 0 0 4.56 14.25H10a.75.75 0 0 1 .624 1.166l-1.409 2.113c-.775 1.163.058 2.721 1.456 2.721h.894l3.652-6.392a.25.25 0 0 0 .033-.124z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Dislike);
export default ForwardRef;
