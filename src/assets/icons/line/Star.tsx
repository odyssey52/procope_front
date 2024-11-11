import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Star = (
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
      d="M9.355 2.95a2.907 2.907 0 0 1 5.29 0l1.39 2.93c.217.456.628.758 1.087.827l3.11.47c2.444.37 3.341 3.432 1.637 5.159l-2.25 2.28c-.345.35-.509.862-.425 1.37l.531 3.22c.398 2.413-2.065 4.397-4.282 3.185l-2.782-1.52a1.37 1.37 0 0 0-1.322 0l-2.781 1.52c-2.218 1.212-4.681-.772-4.283-3.184l.531-3.22a1.59 1.59 0 0 0-.425-1.37l-2.25-2.281c-1.704-1.727-.807-4.79 1.638-5.159l3.11-.47c.458-.069.87-.371 1.086-.827zm3.935.643a1.408 1.408 0 0 0-2.58 0l-1.39 2.93A2.95 2.95 0 0 1 7.103 8.19l-3.11.47c-1.154.175-1.694 1.71-.794 2.622l2.25 2.28c.69.7.997 1.697.837 2.669l-.531 3.22c-.217 1.314 1.082 2.171 2.083 1.624l2.782-1.52a2.87 2.87 0 0 1 2.76 0l2.782 1.52c1.002.547 2.3-.31 2.083-1.624l-.53-3.22c-.161-.972.147-1.97.836-2.668l2.25-2.28c.9-.913.36-2.448-.794-2.623l-3.11-.47a2.95 2.95 0 0 1-2.216-1.667z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Star);
export default ForwardRef;
