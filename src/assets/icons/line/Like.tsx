import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLike = (
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
      d="M11.349 2.628A.75.75 0 0 1 12 2.25h1.329c2.595 0 4.144 2.893 2.704 5.053l-.632.947h4.037a2.75 2.75 0 0 1 2.668 3.417l-1.62 6.485a4.75 4.75 0 0 1-4.61 3.598h-3.665a4.75 4.75 0 0 1-2.635-.798l-1.108-.738A2.75 2.75 0 0 1 6 21.75H4A2.75 2.75 0 0 1 1.25 19v-9A2.75 2.75 0 0 1 4 7.25h2c.859 0 1.626.394 2.13 1.01zM8.75 10.266v8.199a.25.25 0 0 0 .111.208l1.547 1.031a3.25 3.25 0 0 0 1.803.546h3.666a3.25 3.25 0 0 0 3.153-2.462l1.621-6.485a1.25 1.25 0 0 0-1.213-1.553H14a.75.75 0 0 1-.624-1.166l1.409-2.113c.775-1.163-.059-2.721-1.456-2.721h-.894l-3.652 6.392a.25.25 0 0 0-.033.124M7.25 10c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLike);
export default ForwardRef;
