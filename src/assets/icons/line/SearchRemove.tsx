import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SearchRemove = (
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
      d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5c0 2.56-.939 4.902-2.491 6.698l3.271 3.272a.75.75 0 1 1-1.06 1.06l-3.272-3.271A10.2 10.2 0 0 1 11.5 21.75c-5.66 0-10.25-4.59-10.25-10.25m6.891-3.359a.75.75 0 0 1 1.06 0L11.5 10.44l2.298-2.298a.75.75 0 0 1 1.06 1.06L12.562 11.5l2.298 2.298a.75.75 0 0 1-1.06 1.06L11.5 12.562l-2.298 2.298a.75.75 0 0 1-1.06-1.06l2.297-2.299-2.298-2.298a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SearchRemove);
export default ForwardRef;