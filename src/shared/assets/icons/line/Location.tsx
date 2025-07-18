import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Location = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2.75C7.43484 2.75 3.75 6.40266 3.75 10.8889C3.75 13.0928 5.03493 15.7033 6.80731 17.8014C7.68353 18.8387 8.65039 19.7157 9.58168 20.3274C10.5283 20.9492 11.3661 21.25 12 21.25C12.6339 21.25 13.4717 20.9492 14.4183 20.3274C15.3496 19.7157 16.3165 18.8387 17.1927 17.8014C18.9651 15.7033 20.25 13.0928 20.25 10.8889C20.25 6.40266 16.5652 2.75 12 2.75ZM2.25 10.8889C2.25 5.55672 6.62403 1.25 12 1.25C17.376 1.25 21.75 5.55672 21.75 10.8889C21.75 13.5941 20.2224 16.5393 18.3386 18.7694C17.3867 19.8962 16.3145 20.8766 15.2418 21.5811C14.1845 22.2756 13.0536 22.75 12 22.75C10.9464 22.75 9.81548 22.2756 8.75817 21.5811C7.68554 20.8766 6.61334 19.8962 5.66144 18.7694C3.77757 16.5393 2.25 13.5941 2.25 10.8889ZM12 8.75C10.7574 8.75 9.75 9.75736 9.75 11C9.75 12.2426 10.7574 13.25 12 13.25C13.2426 13.25 14.25 12.2426 14.25 11C14.25 9.75736 13.2426 8.75 12 8.75ZM8.25 11C8.25 8.92893 9.92893 7.25 12 7.25C14.0711 7.25 15.75 8.92893 15.75 11C15.75 13.0711 14.0711 14.75 12 14.75C9.92893 14.75 8.25 13.0711 8.25 11Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Location);
export default ForwardRef;
