import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const BagDollar = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string;
  },
  ref: Ref<SVGSVGElement>,
) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size} ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.25 12.75c0-1.472 1.328-2.5 2.75-2.5s2.75 1.028 2.75 2.5a.75.75 0 0 1-1.5 0c0-.461-.462-1-1.25-1s-1.25.539-1.25 1 .462 1 1.25 1c1.422 0 2.75 1.028 2.75 2.5s-1.328 2.5-2.75 2.5-2.75-1.028-2.75-2.5a.75.75 0 0 1 1.5 0c0 .461.462 1 1.25 1s1.25-.539 1.25-1-.462-1-1.25-1c-1.422 0-2.75-1.028-2.75-2.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75M12 17.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.92 10.866a6.75 6.75 0 0 1 6.405-4.616h1.35a6.75 6.75 0 0 1 6.404 4.616l1 3c1.457 4.37-1.796 8.884-6.404 8.884h-3.35c-4.608 0-7.861-4.514-6.404-8.884zm6.405-3.116a5.25 5.25 0 0 0-4.981 3.59l-1 3c-1.133 3.4 1.397 6.91 4.98 6.91h3.351c3.584 0 6.114-3.51 4.981-6.91l-1-3a5.25 5.25 0 0 0-4.98-3.59z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.517 2.824C9.183 2.394 8.24 3.939 9.078 4.9l1.177 1.35h3.49l1.177-1.35c.838-.961-.105-2.507-1.439-2.076l-.928.299a1.8 1.8 0 0 1-1.11 0zm-2.57 3.062c-1.908-2.19.354-5.353 3.03-4.49l.928.3a.3.3 0 0 0 .19 0l.928-.3c2.677-.863 4.938 2.3 3.03 4.49L14.65 7.493a.75.75 0 0 1-.565.257H9.914a.75.75 0 0 1-.565-.257z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(BagDollar);
export default ForwardRef;
