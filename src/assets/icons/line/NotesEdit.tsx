import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const NotesEdit = (
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
      d="M8 1.25a.75.75 0 0 1 .75.75v.75h6.5V2a.75.75 0 0 1 1.5 0v.75H17a4.75 4.75 0 0 1 4.75 4.75V10a.75.75 0 0 1-1.5 0V7.5A3.25 3.25 0 0 0 17 4.25h-.25V5a.75.75 0 0 1-1.5 0v-.75h-6.5V5a.75.75 0 0 1-1.5 0v-.75H7A3.25 3.25 0 0 0 3.75 7.5V18A3.25 3.25 0 0 0 7 21.25h2a.75.75 0 0 1 0 1.5H7A4.75 4.75 0 0 1 2.25 18V7.5A4.75 4.75 0 0 1 7 2.75h.25V2A.75.75 0 0 1 8 1.25m9.612 11.71a2.424 2.424 0 0 1 3.428 3.428l-5.015 5.014c-.21.211-.472.365-.759.447L10.91 23.09l1.242-4.357c.082-.287.236-.548.447-.76zm2.367 1.06a.924.924 0 0 0-1.306 0l-5.015 5.015a.25.25 0 0 0-.064.11l-.503 1.764 1.764-.503a.25.25 0 0 0 .11-.064l5.014-5.015a.924.924 0 0 0 0-1.306"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(NotesEdit);
export default ForwardRef;
