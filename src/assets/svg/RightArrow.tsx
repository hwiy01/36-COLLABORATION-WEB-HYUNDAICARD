import type { SVGProps } from "react";
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 5 7"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1 1 3 2.5L1 6"
    />
  </svg>
);
export default SvgRightArrow;
