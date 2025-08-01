import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const BarChart01 = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3.75C11.3096 3.75 10.75 4.30964 10.75 5L10.75 19C10.75 19.6904 11.3096 20.25 12 20.25C12.6904 20.25 13.25 19.6904 13.25 19L13.25 5C13.25 4.30964 12.6904 3.75 12 3.75ZM9.25 5C9.25 3.48122 10.4812 2.25 12 2.25C13.5188 2.25 14.75 3.48122 14.75 5L14.75 19C14.75 20.5188 13.5188 21.75 12 21.75C10.4812 21.75 9.25 20.5188 9.25 19L9.25 5ZM20 8.75C19.3096 8.75 18.75 9.30964 18.75 10V19C18.75 19.6904 19.3096 20.25 20 20.25C20.6904 20.25 21.25 19.6904 21.25 19V10C21.25 9.30964 20.6904 8.75 20 8.75ZM17.25 10C17.25 8.48122 18.4812 7.25 20 7.25C21.5188 7.25 22.75 8.48122 22.75 10V19C22.75 20.5188 21.5188 21.75 20 21.75C18.4812 21.75 17.25 20.5188 17.25 19V10ZM4 12.75C3.30964 12.75 2.75 13.3096 2.75 14L2.75 19C2.75 19.6904 3.30964 20.25 4 20.25C4.69036 20.25 5.25 19.6904 5.25 19L5.25 14C5.25 13.3096 4.69036 12.75 4 12.75ZM1.25 14C1.25 12.4812 2.48122 11.25 4 11.25C5.51878 11.25 6.75 12.4812 6.75 14L6.75 19C6.75 20.5188 5.51878 21.75 4 21.75C2.48122 21.75 1.25 20.5188 1.25 19L1.25 14Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart01);
export default ForwardRef;
