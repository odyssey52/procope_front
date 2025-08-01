import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Chatting = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M1.25 10.875C1.25 6.12036 5.05926 2.25 9.77778 2.25H10.8889C14.2686 2.25 17.1109 4.53311 18.0093 7.64519C20.8209 9.05679 22.75 11.9898 22.75 15.375V18.75C22.75 20.398 21.428 21.75 19.7778 21.75H13.1111C10.0645 21.75 7.45442 19.8942 6.31181 17.25H4.22222C2.57195 17.25 1.25 15.898 1.25 14.25V10.875ZM7.98571 17.25C9.01049 19.0467 10.9255 20.25 13.1111 20.25H19.7778C20.5821 20.25 21.25 19.5872 21.25 18.75V15.375C21.25 12.981 20.0861 10.8653 18.3035 9.57384C18.3049 9.6324 18.3056 9.69113 18.3056 9.75C18.3056 13.8833 14.9938 17.25 10.8889 17.25H7.98571ZM9.77778 3.75C5.9052 3.75 2.75 6.93116 2.75 10.875V14.25C2.75 15.0872 3.41789 15.75 4.22222 15.75H10.8889C14.1478 15.75 16.8056 13.0725 16.8056 9.75C16.8056 9.26538 16.749 8.79515 16.6427 8.34532C16.018 5.70302 13.6728 3.75 10.8889 3.75H9.77778Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Chatting);
export default ForwardRef;
