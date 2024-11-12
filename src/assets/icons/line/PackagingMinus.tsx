import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const PackagingMinus = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M15.75 14C15.75 14.4142 15.4142 14.75 15 14.75L9 14.75C8.58579 14.75 8.25 14.4142 8.25 14C8.25 13.5858 8.58579 13.25 9 13.25L15 13.25C15.4142 13.25 15.75 13.5858 15.75 14Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.21337 3.0327C5.11479 1.90593 6.47953 1.25 7.9225 1.25H16.0775C17.5205 1.25 18.8852 1.90593 19.7866 3.0327L21.7091 5.43582C22.3829 6.27806 22.75 7.32453 22.75 8.40312V18C22.75 20.6234 20.6234 22.75 18 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V8.40312C1.25 7.32453 1.61708 6.27806 2.29087 5.43582L4.21337 3.0327ZM7.9225 2.75C6.9352 2.75 6.00143 3.19879 5.38468 3.96974L3.46218 6.37287C3.00116 6.94913 2.75 7.66514 2.75 8.40312V18C2.75 19.7949 4.20507 21.25 6 21.25H18C19.7949 21.25 21.25 19.7949 21.25 18V8.40312C21.25 7.66514 20.9988 6.94913 20.5378 6.37286L18.6153 3.96974C17.9986 3.19879 17.0648 2.75 16.0775 2.75H7.9225Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7C21.75 7.41421 21.4142 7.75 21 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(PackagingMinus);
export default ForwardRef;
