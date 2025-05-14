import SvgIconDesigners from "src/assets/svg/IconDesigner's";
import SvgIconDesignersX from "src/assets/svg/IconDesigner'sX";
import { baseFrame, frameSizes, innerFrame, otherModeStyle } from "./chip.css";

type mode = "input" | "filter" | "selected" | "dropdown";

interface ChipProps {
  mode: "input" | "filter" | "selected" | "dropdown";
  content: string;
  handleClickCloseBtn?: () => void;
  onClick?: () => void;
  className?: string;
}

const Chip = ({
  mode = "dropdown",
  content = "크크크",
  handleClickCloseBtn,
}: ChipProps) => {
  const getSizeByContent = (text: string, mode: mode) => {
    const length = text.length;

    if (mode === "input") {
      if (length <= 3) {
        return "small";
      }
      if (length <= 7) {
        return "medium";
      }
      return "large";
    }
    if (mode === "filter" || mode === "selected") {
      if (length <= 5) {
        return "small";
      }
      if (length <= 9) {
        return "medium";
      }
      return "large";
    }
    return "small";
  };

  const size = getSizeByContent(content, mode);

  if (mode === "dropdown") {
    return (
      <div className={baseFrame}>
        <section className={innerFrame}>
          <p>{content}</p>
          <SvgIconDesigners width={24} height={24} />
        </section>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <section className={`${frameSizes[size]} ${otherModeStyle[mode]}`}>
        <p>{content}</p>
        {mode === "input" && (
          <button type="button" onClick={handleClickCloseBtn}>
            <SvgIconDesignersX width={24} height={24} />
          </button>
        )}
      </section>
    </div>
  );
};

export default Chip;
