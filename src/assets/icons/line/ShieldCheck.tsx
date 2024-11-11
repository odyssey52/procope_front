import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ShieldCheck = (
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
      d="M13.32 3.407a3.25 3.25 0 0 0-2.64 0L5.682 5.63c-1.185.526-1.935 1.69-1.863 2.931.176 3.024.703 5.116 1.704 6.824 1.003 1.71 2.524 3.109 4.833 4.672a2.935 2.935 0 0 0 3.288.001c2.313-1.57 3.823-2.982 4.816-4.694s1.512-3.797 1.703-6.786c.08-1.25-.672-2.427-1.865-2.957zm-3.249-1.37a4.75 4.75 0 0 1 3.858 0l4.978 2.212c1.719.764 2.877 2.496 2.753 4.424-.2 3.109-.748 5.452-1.902 7.442-1.155 1.99-2.873 3.555-5.272 5.183a4.435 4.435 0 0 1-4.97 0c-2.39-1.617-4.121-3.167-5.287-5.156-1.167-1.99-1.724-4.344-1.908-7.494-.111-1.918 1.046-3.632 2.752-4.39zm5.423 7.399a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 1 1 .937-1.172l1.753 1.403a.25.25 0 0 0 .344-.031l2.87-3.28a.75.75 0 0 1 1.058-.07"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldCheck);
export default ForwardRef;
