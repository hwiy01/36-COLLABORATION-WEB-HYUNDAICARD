import type { SVGProps } from "react";
const SvgIconHamburge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 6h14M5 12h14M5 18h14"
    />
  </svg>
);
export default SvgIconHamburge;
