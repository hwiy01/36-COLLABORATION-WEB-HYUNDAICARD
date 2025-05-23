import type { SVGProps } from "react";
const SvgIconNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.556 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9.333"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 7 2.5 2.5L21 4"
    />
    <rect width={4} height={4} x={7} y={8} fill="#000" rx={1} />
    <rect width={4} height={4} x={7} y={13} fill="#000" rx={1} />
    <rect width={5} height={2} x={12} y={15} fill="#000" rx={1} />
    <rect width={5} height={2} x={12} y={12} fill="#000" rx={1} />
  </svg>
);
export default SvgIconNote;
