import type { SVGProps } from "react";
const SvgAdPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 8"
    {...props}
  >
    <rect width={17} height={8} fill="#000" rx={4} />
    <path fill="#fff" d="M6 6V2l5 2z" />
  </svg>
);
export default SvgAdPlay;
