import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHome = (
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
      d="M14.053 3.488a3.225 3.225 0 0 0-4.106 0l-5 4.118A3.3 3.3 0 0 0 3.75 10.15v7.817c0 1.819 1.46 3.283 3.25 3.283h10c1.79 0 3.25-1.464 3.25-3.283V10.15c0-.988-.44-1.922-1.197-2.544zM8.993 2.33a4.725 4.725 0 0 1 6.014 0l5 4.118a4.8 4.8 0 0 1 1.743 3.702v7.817c0 2.636-2.12 4.783-4.75 4.783H7c-2.63 0-4.75-2.147-4.75-4.783V10.15c0-1.433.639-2.793 1.743-3.702z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.25 18a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;
