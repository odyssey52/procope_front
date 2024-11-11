import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Google = (
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
      fill="#4285F4"
      fillRule="evenodd"
      d="M22.499 12.257c0-.76-.069-1.49-.195-2.191h-10.09v4.144h5.766a4.93 4.93 0 0 1-2.138 3.234v2.688h3.463c2.026-1.865 3.195-4.612 3.195-7.875z"
      clipRule="evenodd"
    />
    <path
      fill="#34A853"
      fillRule="evenodd"
      d="M12.214 22.728c2.893 0 5.318-.96 7.09-2.596l-3.462-2.688c-.96.643-2.187 1.023-3.629 1.023-2.79 0-5.153-1.885-5.995-4.417H2.64v2.775a10.71 10.71 0 0 0 9.574 5.903"
      clipRule="evenodd"
    />
    <path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M6.219 14.05a6.5 6.5 0 0 1-.337-2.036c0-.707.123-1.393.337-2.036V7.203h-3.58A10.7 10.7 0 0 0 1.5 12.014c0 1.729.414 3.365 1.14 4.811z"
      clipRule="evenodd"
    />
    <path
      fill="#EA4335"
      fillRule="evenodd"
      d="M12.214 5.561c1.573 0 2.986.541 4.096 1.602l3.073-3.073c-1.856-1.728-4.281-2.79-7.169-2.79A10.71 10.71 0 0 0 2.64 7.203l3.579 2.775c.842-2.532 3.204-4.417 5.995-4.417"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Google);
export default ForwardRef;
