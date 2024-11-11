import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Loading = (
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
      d="M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l2.122 2.12A.75.75 0 0 1 6.52 7.582L4.399 5.459a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-2.12 2.122a.75.75 0 0 1-1.062-1.061l2.122-2.121a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m17 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M7.58 16.42a.75.75 0 0 1 0 1.06l-2.12 2.121a.75.75 0 1 1-1.061-1.06l2.12-2.122a.75.75 0 0 1 1.062 0m8.84 0a.75.75 0 0 1 1.06 0l2.121 2.12a.75.75 0 0 1-1.06 1.061l-2.122-2.12a.75.75 0 0 1 0-1.062M12 18.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Loading);
export default ForwardRef;
