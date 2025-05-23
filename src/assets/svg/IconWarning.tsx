import type { SVGProps } from "react";
const SvgIconWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={16}
      height={4}
      x={4}
      y={17}
      stroke="#000"
      strokeWidth={2}
      rx={1}
    />
    <path
      stroke="#000"
      strokeWidth={2}
      d="M12 4c3.719 0 6 3.027 6 5.625V17H6V9.625c0-2.517 2.141-5.436 5.655-5.616z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.5 10 2 4 1.5-4 1.5 4 2-4M16 11.5H8"
    />
  </svg>
);
export default SvgIconWarning;
