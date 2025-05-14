import { baseFrame, frameSizes, innerFrame } from "./chip.css";

interface ChipProps {
  mode: "input" | "filter" | "selected" | "dropdown";
  size?: "small" | "medium" | "large"; // dropdown일 땐 안 넣어도 됨
  dropdownItem?: "";
  content?: "";
  handleClickCloseBtn: "";
  onClick: "";
  className: "";
}

const Chip = ({ mode = "input", content, size = "medium" }: ChipProps) => {
  // input 모드일 때는 absolute -> right:8 한 곳에 X 렌더링
  //
  if (mode === "dropdown") {
    return (
      <div className={baseFrame}>
        <section className={innerFrame}></section>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <section className={frameSizes[size]}></section>
    </div>
  );
};

export default Chip;
