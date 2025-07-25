import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Redo = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 11.5858 20.5858 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C14.771 2.25 17.2715 3.40622 19.046 5.26091V3C19.046 2.58579 19.3817 2.25 19.796 2.25C20.2102 2.25 20.546 2.58579 20.546 3V7.5C20.546 7.91421 20.2102 8.25 19.796 8.25H15.375C14.9608 8.25 14.625 7.91421 14.625 7.5C14.625 7.08579 14.9608 6.75 15.375 6.75H18.3644C16.8505 4.91682 14.5612 3.75 12 3.75Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Redo);
export default ForwardRef;
