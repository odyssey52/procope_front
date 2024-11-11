import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Donate = (
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
      d="M1.25 8A.75.75 0 0 1 2 7.25h2a.75.75 0 0 1 .3.063l6.263 2.74a2.661 2.661 0 0 1-2.115 4.884l-1.743-.748a.75.75 0 0 1 .59-1.378l1.744.747a1.161 1.161 0 0 0 .923-2.131L3.843 8.75H2A.75.75 0 0 1 1.25 8"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m10.665 12.994 3.404 1.702a5.25 5.25 0 0 0 2.348.554H18a2.75 2.75 0 0 1 0 5.5H9.89a8.75 8.75 0 0 1-3.913-.924l-4.311-2.155a.75.75 0 1 1 .67-1.342l4.311 2.156a7.25 7.25 0 0 0 3.243.765H18a1.25 1.25 0 0 0 0-2.5h-1.583a6.75 6.75 0 0 1-3.02-.713l-3.403-1.702zM14.652 4.75c-1.05 0-1.902.851-1.902 1.902v.124c0 .46.157.907.444 1.266l2.83 3.537a1.25 1.25 0 0 0 1.952 0l2.83-3.537c.287-.36.444-.806.444-1.266v-.124c0-1.05-.851-1.902-1.902-1.902h-.297c-.314 0-.615.125-.837.347-.67.67-1.758.67-2.428 0a1.18 1.18 0 0 0-.837-.347zM11.25 6.652a3.4 3.4 0 0 1 3.402-3.402h.297c.712 0 1.394.283 1.898.786a.217.217 0 0 0 .306 0 2.68 2.68 0 0 1 1.898-.786h.297a3.4 3.4 0 0 1 3.402 3.402v.124c0 .8-.273 1.578-.773 2.203l-2.83 3.537a2.75 2.75 0 0 1-4.294 0l-2.83-3.537a3.53 3.53 0 0 1-.773-2.203z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Donate);
export default ForwardRef;
