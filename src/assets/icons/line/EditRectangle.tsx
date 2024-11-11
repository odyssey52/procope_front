import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const EditRectangle = (
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
      d="M16.586 2.062a2.773 2.773 0 0 1 3.922 0l1.43 1.43a2.773 2.773 0 0 1 0 3.922l-8.105 8.105c-.424.424-.975.7-1.569.784l-3.003.429a1.76 1.76 0 0 1-1.993-1.993l.43-3.003c.084-.594.36-1.145.783-1.569zm2.86 1.06a1.273 1.273 0 0 0-1.799 0l-1.173 1.174c.02.104.053.235.103.384.146.439.446 1.05 1.07 1.673.624.624 1.234.924 1.674 1.07q.224.073.383.103l1.173-1.173a1.273 1.273 0 0 0 0-1.8zm-.937 5.599a5.9 5.9 0 0 1-1.923-1.307A5.9 5.9 0 0 1 15.28 5.49l-5.737 5.737a1.27 1.27 0 0 0-.36.72l-.43 3.003a.26.26 0 0 0 .297.296l3.003-.429c.273-.039.526-.165.72-.36zm-2.073-4.7v-.006m0 .006v.001zM6 2.75A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18v-6a.75.75 0 0 1 1.5 0v6A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18V6A4.75 4.75 0 0 1 6 1.25h6a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(EditRectangle);
export default ForwardRef;
