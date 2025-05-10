import type { SVGProps } from "react";
const SvgTestIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="m12 2 9 9-9 9-9-9z" />
  </svg>
);
export default SvgTestIcon;
