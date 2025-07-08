import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Pencil = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M15.7121 3.28594C17.0934 1.90469 19.3328 1.90469 20.7141 3.28593C22.0953 4.66718 22.0953 6.90662 20.7141 8.28787L9.25857 19.7434C8.59165 20.4103 7.73958 20.8612 6.81304 21.0376L3.14026 21.7368C2.89635 21.7832 2.64526 21.7059 2.46968 21.5303C2.29411 21.3548 2.21681 21.1037 2.26324 20.8597L2.9624 17.187C3.13878 16.2604 3.58972 15.4084 4.25664 14.7414L15.7121 3.28594ZM19.6534 4.34659C18.858 3.55113 17.5683 3.55114 16.7728 4.3466L15.3677 5.7517L18.2483 8.63231L19.6534 7.22721C20.4489 6.43175 20.4489 5.14205 19.6534 4.34659ZM17.1877 9.69297L14.307 6.81236L5.3173 15.8021C4.86313 16.2563 4.55605 16.8365 4.43594 17.4675L3.94299 20.057L6.53254 19.5641C7.16349 19.444 7.74375 19.1369 8.19792 18.6827L17.1877 9.69297Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Pencil);
export default ForwardRef;
