import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBriefcase01 = (
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
      d="M1.25 10A4.75 4.75 0 0 1 6 5.25h12A4.75 4.75 0 0 1 22.75 10v8A4.75 4.75 0 0 1 18 22.75H6A4.75 4.75 0 0 1 1.25 18zM6 6.75A3.25 3.25 0 0 0 2.75 10v8A3.25 3.25 0 0 0 6 21.25h12A3.25 3.25 0 0 0 21.25 18v-8A3.25 3.25 0 0 0 18 6.75z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 2.75A2.25 2.25 0 0 0 8.75 5v1a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v1a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75zM1.373 10.589a.75.75 0 0 1 1.038-.216l.003.002.012.008.049.031.193.123a38.68 38.68 0 0 0 3.201 1.792c2.01.998 4.37 1.921 6.13 1.921 1.762 0 4.122-.923 6.132-1.922a39 39 0 0 0 3.394-1.914l.049-.031.011-.008.003-.002a.75.75 0 0 1 .823 1.254L22 11l.411.627-.006.004-.014.01-.055.035-.207.131a40.189 40.189 0 0 1-3.33 1.864c-2.015 1.002-4.655 2.079-6.8 2.079s-4.783-1.077-6.797-2.078a40 40 0 0 1-3.538-1.996l-.055-.036-.015-.01-.005-.003.41-.627-.41.627a.75.75 0 0 1-.216-1.039"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M14 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgBriefcase01);
export default ForwardRef;
