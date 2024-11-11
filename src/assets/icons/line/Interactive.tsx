import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgInteractive = (
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
      d="M12 2.75a9.25 9.25 0 0 0-.078 18.5.75.75 0 1 1-.013 1.5C6.014 22.7 1.25 17.907 1.25 12 1.25 6.063 6.063 1.25 12 1.25c5.907 0 10.7 4.764 10.75 10.66a.75.75 0 1 1-1.5.012A9.25 9.25 0 0 0 12 2.75m0 5a4.25 4.25 0 0 0-1.59 8.193.75.75 0 1 1-.563 1.39A5.752 5.752 0 0 1 12 6.25a5.75 5.75 0 0 1 5.333 3.597.75.75 0 1 1-1.39.562A4.25 4.25 0 0 0 12 7.75m1.186 5.019a.33.33 0 0 0-.417.417l2.612 7.838c.1.301.527.301.627 0l.965-2.894a1.83 1.83 0 0 1 1.157-1.157l2.894-.965c.301-.1.301-.526 0-.627zm-1.84.892c-.477-1.431.884-2.792 2.315-2.315l7.838 2.612c1.668.557 1.668 2.917 0 3.473l-2.895.965a.33.33 0 0 0-.208.208L17.43 21.5c-.556 1.668-2.916 1.668-3.473 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInteractive);
export default ForwardRef;
