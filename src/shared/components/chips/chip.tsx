import SvgIconDesigners from "src/assets/svg/IconDesigner's";
import SvgIconDesignersX from "src/assets/svg/IconDesigner'sX";
import {
  baseFrame,
  frameSizes,
  innerFrame,
  inputTypeFont,
  otherModeStyle,
} from "./chip.css";

interface ChipProps {
  mode: "input" | "filter" | "selected" | "dropdown";
  size?: "small" | "medium" | "large"; // dropdown일 땐 안 넣어도 됨
  dropdownItem?: "";
  content?: "";
  handleClickCloseBtn: "";
  onClick: "";
  className: "";
}

const Chip = ({ mode = "dropdown", content, size = "medium" }: ChipProps) => {
  // input 모드일 때는 absolute -> right:8 한 곳에 X 렌더링
  //
  if (mode === "dropdown") {
    return (
      <div className={baseFrame}>
        <section className={innerFrame}>
          <p>여행/해외</p>
          <SvgIconDesigners width={24} height={24} />
        </section>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <section className={`${frameSizes[size]} ${otherModeStyle[mode]}`}>
        <p>안녕</p>
        {mode === "input" && <SvgIconDesignersX width={24} height={24} />}
      </section>
    </div>
  );
};

export default Chip;
