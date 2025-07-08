import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
// prettier-ignore
type Props = {
  size?: number | string;
};
const SortArrow = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & Props, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9142 9.84645C14.7792 10.0229 14.533 10.0515 14.3642 9.91034L12 7.93298L9.63576 9.91034C9.46701 10.0515 9.22076 10.0229 9.08576 9.84645C8.95076 9.67003 8.97812 9.41259 9.14687 9.27145L11.7556 7.08964C11.8985 6.97012 12.1015 6.97012 12.2444 7.08964L14.8531 9.27145C15.0219 9.41259 15.0492 9.67003 14.9142 9.84645Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9142 14.1535C14.7792 13.9771 14.533 13.9485 14.3642 14.0897L12 16.067L9.63576 14.0897C9.46701 13.9485 9.22076 13.9771 9.08576 14.1535C8.95076 14.33 8.97812 14.5874 9.14687 14.7285L11.7556 16.9104C11.8985 17.0299 12.1015 17.0299 12.2444 16.9104L14.8531 14.7285C15.0219 14.5874 15.0492 14.33 14.9142 14.1535Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SortArrow);
export default ForwardRef;
