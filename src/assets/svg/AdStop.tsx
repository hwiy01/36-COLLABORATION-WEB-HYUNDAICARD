import type { SVGProps } from "react";
const SvgAdStop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 8"
    {...props}
  >
    <rect width={17} height={8} fill="#000" rx={4} />
    <path fill="#fff" d="M9 2h2v4H9zM6 2h2v4H6z" />
  </svg>
);
export default SvgAdStop;
