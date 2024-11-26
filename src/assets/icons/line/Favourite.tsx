import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
type Props = {
  size?: number | string;
};
const Favourite = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M10.686 5.21328C8.86996 3.26224 5.94946 3.26224 4.13346 5.21328C2.28885 7.19505 2.28885 10.4289 4.13345 12.4107L11.0189 19.8081C11.5673 20.3973 12.4327 20.3973 12.9811 19.8081L19.8665 12.4107C21.7112 10.4289 21.7111 7.19505 19.8665 5.21328C18.0505 3.26224 15.13 3.26224 13.314 5.21328L12.549 6.03522C12.4071 6.18764 12.2082 6.27422 12 6.27422C11.7918 6.27422 11.5929 6.18764 11.451 6.03522L10.686 5.21328ZM3.03548 4.1913C5.44472 1.6029 9.37469 1.6029 11.7839 4.1913L12 4.42342L12.2161 4.1913C14.6253 1.6029 18.5553 1.6029 20.9645 4.1913C23.3452 6.74896 23.3452 10.875 20.9645 13.4326L14.0791 20.8301C12.9374 22.0566 11.0626 22.0566 9.92091 20.8301L3.03548 13.4326C0.65484 10.875 0.654841 6.74896 3.03548 4.1913Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Favourite);
export default ForwardRef;
