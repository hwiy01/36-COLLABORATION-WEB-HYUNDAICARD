import type { SVGProps } from "react";
const SvgVectorStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 1 18"
    {...props}
  >
    <path fill="#F5F5F5" d="M1 0v18H0V0z" />
  </svg>
);
export default SvgVectorStroke;
