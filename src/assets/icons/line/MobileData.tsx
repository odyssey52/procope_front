import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMobileData = (
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
      d="M8.75 18.172q.07-.052.134-.117l1.586-1.585a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L4.47 17.53a.75.75 0 0 1 1.06-1.06l1.586 1.585q.064.064.134.117V10a.75.75 0 1 1 1.5 0zM15.25 5.828a1 1 0 0 0-.134.116L13.53 7.53a.75.75 0 1 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L19.53 6.47a.75.75 0 0 1-1.06 1.06l-1.586-1.586a1 1 0 0 0-.134-.116V14a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMobileData);
export default ForwardRef;
