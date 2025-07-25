import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const Home = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M14.0534 3.48832C12.8579 2.50389 11.1421 2.50389 9.94661 3.48832L4.94661 7.6055C4.1904 8.22819 3.75 9.16221 3.75 10.1503V17.9668C3.75 19.7859 5.2109 21.25 7 21.25H17C18.7891 21.25 20.25 19.7859 20.25 17.9668V10.1503C20.25 9.16221 19.8096 8.22818 19.0534 7.6055L14.0534 3.48832ZM8.99311 2.33037C10.7425 0.889878 13.2575 0.889874 15.0069 2.33037L20.0069 6.44755C21.1111 7.35681 21.75 8.71654 21.75 10.1503V17.9668C21.75 20.6027 19.6292 22.75 17 22.75H7C4.37082 22.75 2.25 20.6027 2.25 17.9668V10.1503C2.25 8.71654 2.88889 7.35681 3.99311 6.44755L8.99311 2.33037Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(Home);
export default ForwardRef;
