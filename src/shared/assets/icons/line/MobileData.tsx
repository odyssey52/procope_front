import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const MobileData = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
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
      d="M8.75 18.1718C8.79666 18.1368 8.84142 18.098 8.88388 18.0555L10.4697 16.4697C10.7626 16.1768 11.2374 16.1768 11.5303 16.4697C11.8232 16.7626 11.8232 17.2375 11.5303 17.5304L9.94454 19.1162C8.8706 20.1901 7.1294 20.1901 6.05546 19.1162L4.46967 17.5304C4.17678 17.2375 4.17678 16.7626 4.46967 16.4697C4.76256 16.1768 5.23744 16.1768 5.53033 16.4697L7.11612 18.0555C7.15858 18.098 7.20334 18.1368 7.25 18.1718L7.25 10.0001C7.25 9.58584 7.58579 9.25006 8 9.25006C8.41421 9.25006 8.75 9.58584 8.75 10.0001L8.75 18.1718Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.25 5.82817C15.2033 5.86325 15.1586 5.90202 15.1161 5.94449L13.5303 7.53027C13.2374 7.82317 12.7626 7.82317 12.4697 7.53027C12.1768 7.23738 12.1768 6.76251 12.4697 6.46961L14.0555 4.88383C15.1294 3.80988 16.8706 3.80988 17.9445 4.88382L19.5303 6.46961C19.8232 6.7625 19.8232 7.23738 19.5303 7.53027C19.2374 7.82316 18.7626 7.82316 18.4697 7.53027L16.8839 5.94449C16.8414 5.90202 16.7967 5.86325 16.75 5.82817L16.75 13.9999C16.75 14.4142 16.4142 14.7499 16 14.7499C15.5858 14.7499 15.25 14.4142 15.25 13.9999L15.25 5.82817Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MobileData);
export default ForwardRef;
