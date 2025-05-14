import { SelectedS } from "src/assets/svg";
import { cardSize, closeButton, svgSize } from "./chip.css";

interface ChipProps {
  mode: "input" | "filter" | "selected" | "dropdown-open" | "dropdown-default";
  size: "small" | "medium" | "large" | "dropdown";
  dropdownItem?: "";
  content?: "";
  handleClickCloseBtn: "";
  onClick: "";
  className: "";
}

const Chip = ({ mode, content, size = "large" }: ChipProps) => {
  // input 모드일 때는 absolute -> right:8 한 곳에 X 렌더링
  //
  return (
    <div>
      <SelectedS stroke="black" width={75} height={32} />
    </div>
  );
};

export default Chip;
