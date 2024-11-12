import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Google = (
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
      d="M22.4989 12.2573C22.4989 11.4973 22.4302 10.7675 22.3041 10.066H12.2139V14.2103H17.9801C17.7318 15.5497 16.9769 16.6842 15.8424 17.4442V20.132H19.3054C21.3311 18.2668 22.4999 15.5204 22.4999 12.2573H22.4989Z"
      fill="#4285F4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2141 22.728C15.1068 22.728 17.5322 21.7681 19.3046 20.132L15.8416 17.4442C14.8817 18.0871 13.6554 18.4666 12.2131 18.4666C9.42231 18.4666 7.06049 16.5822 6.2177 14.0498H2.63965V16.8254C4.40294 20.3268 8.0254 22.728 12.2141 22.728Z"
      fill="#34A853"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.21859 14.0498C6.00461 13.4068 5.88249 12.7205 5.88249 12.014C5.88249 11.3074 6.00461 10.6211 6.21859 9.97816V7.20251H2.63953C1.91382 8.64888 1.5 10.285 1.5 12.014C1.5 13.7429 1.91382 15.3791 2.63953 16.8254L6.21859 14.0498Z"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2141 5.56142C13.7866 5.56142 15.1997 6.10241 16.3099 7.16321L19.3833 4.08982C17.5272 2.36186 15.1018 1.30005 12.2141 1.30005C8.0254 1.30005 4.40294 3.70123 2.63965 7.20258L6.21871 9.97822C7.0615 7.44582 9.42332 5.56142 12.2141 5.56142Z"
      fill="#EA4335"
    />
  </svg>
);
const ForwardRef = forwardRef(Google);
export default ForwardRef;
