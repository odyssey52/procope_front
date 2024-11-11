import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Favourite = (
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
      d="M10.686 5.213c-1.816-1.95-4.737-1.95-6.553 0-1.844 1.982-1.844 5.216 0 7.198l6.886 7.397c.548.59 1.414.59 1.962 0l6.885-7.397c1.845-1.982 1.845-5.216 0-7.198-1.815-1.95-4.736-1.95-6.552 0l-.765.822a.75.75 0 0 1-1.098 0zm-7.65-1.022c2.409-2.588 6.339-2.588 8.748 0l.216.232.216-.232c2.41-2.588 6.34-2.588 8.749 0 2.38 2.558 2.38 6.684 0 9.242l-6.886 7.397a2.81 2.81 0 0 1-4.158 0l-6.886-7.397c-2.38-2.558-2.38-6.684 0-9.242"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Favourite);
export default ForwardRef;
