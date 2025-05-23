import type { SVGProps } from "react";
const SvgIconBulb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      d="M12 3a7 7 0 0 1 4.267 12.547l-.34.246a2.08 2.08 0 0 0-.927 1.71V19a3 3 0 1 1-6 0v-1.496c0-.636-.299-1.19-.732-1.563l-.195-.148A7 7 0 0 1 12 3Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17.5h-3m-3 0h3m0 0v-7m2.5 0h-5"
    />
  </svg>
);
export default SvgIconBulb;
