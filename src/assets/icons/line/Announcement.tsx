import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Announcement = (
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
      d="M11.964 3.473a2.75 2.75 0 0 1 4.396.497l4.292 7.434a2.75 2.75 0 0 1-1.768 4.056l-3.646.835 1.719 2.977a2.25 2.25 0 1 1-3.897 2.25l-2.411-4.176-1.87.428a2.25 2.25 0 0 1-4.18.829l-2.498-4.33a2.25 2.25 0 0 1 2.807-3.206zM8.47 16.305l10.078-2.307a1.25 1.25 0 0 0 .804-1.844L15.061 4.72a1.25 1.25 0 0 0-1.998-.226L6.025 12.07zm-3.776-3.54a.75.75 0 0 0-1.295.757l2.5 4.33a.75.75 0 0 0 1.302-.743zm7.483 4.23 2.18 3.777a.75.75 0 1 0 1.3-.75l-1.95-3.377zM20.015 2.74a.75.75 0 0 1 .53.918l-.366 1.366a.75.75 0 0 1-1.449-.388l.366-1.366a.75.75 0 0 1 .919-.53m.715 5.36a.75.75 0 0 1 .919-.53l1.366.366a.75.75 0 0 1-.389 1.449l-1.366-.366a.75.75 0 0 1-.53-.919"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Announcement);
export default ForwardRef;
