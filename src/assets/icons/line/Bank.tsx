import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const Bank = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M10.4342 1.73383C11.3816 1.08872 12.6188 1.08872 13.5662 1.73383L21.9613 7.45067C23.3901 8.42361 22.7621 10.75 20.9673 10.75L3.03314 10.75C1.23833 10.75 0.610327 8.42361 2.03908 7.45067L10.4342 1.73383ZM12.7219 2.97367C12.284 2.67544 11.7165 2.67544 11.2785 2.97367L2.88337 8.6905C2.76419 8.77166 2.72369 8.89811 2.76542 9.03889C2.78632 9.1094 2.8246 9.16341 2.86582 9.19676C2.90173 9.22581 2.95197 9.25 3.03314 9.25L20.9673 9.25C21.0484 9.25 21.0987 9.22582 21.1346 9.19676C21.1758 9.16341 21.2141 9.1094 21.235 9.03889C21.2767 8.89811 21.2362 8.77166 21.1171 8.6905L12.7219 2.97367Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 9.25H9.75V18.75H3.25V9.25ZM4.75 10.75V17.25H8.25V10.75H4.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 9.25H20.75V18.75H14.25V9.25ZM15.75 10.75V17.25H19.25V10.75H15.75Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.382 21.25C20.5679 21.25 20.6887 21.0544 20.6056 20.8882L19.6056 18.8882C19.5633 18.8035 19.4767 18.75 19.382 18.75L4.61809 18.75C4.5234 18.75 4.43683 18.8035 4.39448 18.8882L3.39448 20.8882C3.31137 21.0544 3.43224 21.25 3.61809 21.25L20.382 21.25ZM21.9473 20.2174C22.5291 21.381 21.6829 22.75 20.382 22.75L3.61809 22.75C2.31717 22.75 1.47105 21.381 2.05284 20.2174L3.05284 18.2174C3.34928 17.6245 3.95524 17.25 4.61809 17.25L19.382 17.25C20.0449 17.25 20.6508 17.6245 20.9473 18.2174L21.9473 20.2174Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Bank);
export default ForwardRef;
