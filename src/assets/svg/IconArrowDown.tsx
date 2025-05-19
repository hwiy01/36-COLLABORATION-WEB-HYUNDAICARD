import type { SVGProps } from "react";
const SvgIconArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.834 10-3.333 4-3.334-4"
    />
  </svg>
);
export default SvgIconArrowDown;
