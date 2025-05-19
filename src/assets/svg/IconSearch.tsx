import type { SVGProps } from "react";
const SvgIconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={11.467} cy={11.467} r={6.467} stroke="#000" strokeWidth={2} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="m16.547 17.134 2.828 2.828"
    />
  </svg>
);
export default SvgIconSearch;
