import type { SVGProps } from "react";
const SvgIconRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    style={{
      filter: "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))",
      ...(props.style || {}),
    }}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.9 8 4.2 3.5L9.9 15"
    />
  </svg>
);
export default SvgIconRightArrow;
