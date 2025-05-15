import { getSizeByContent } from "@/shared/utils/getSizeByContent";
import SvgIconDesignersDown from "src/assets/svg/IconDesigner'sDown";
import SvgIconDesignersUp from "src/assets/svg/IconDesigner'sUp";
import SvgIconDesignersX from "src/assets/svg/IconDesigner'sX";
import {
  baseFrame,
  closeButton,
  frameSizes,
  innerFrame,
  otherModeStyle,
} from "./chip.css";

export type mode = "input" | "filter" | "selected" | "dropdown";

interface ChipProps {
  mode: "input" | "filter" | "selected" | "dropdown";
  content: string;
  handleClickCloseBtn?: () => void;
  onClick?: () => void;
  dropdownFlag: boolean;
  className?: string;
}

const Chip = ({
  mode = "dropdown",
  content,
  handleClickCloseBtn,
  dropdownFlag,
  onClick,
}: ChipProps) => {
  const size = getSizeByContent(content, mode);

  if (mode === "dropdown") {
    return (
      <button className={baseFrame} onClick={onClick} type="button">
        <section className={innerFrame}>
          <p>{content}</p>
          {dropdownFlag ? (
            <SvgIconDesignersDown width={24} height={24} />
          ) : (
            <SvgIconDesignersUp width={24} height={24} />
          )}
        </section>
      </button>
    );
  }

  return (
    <section className={`${frameSizes[size]} ${otherModeStyle[mode]}`}>
      <p>{content}</p>
      {mode === "input" && (
        <button
          className={closeButton}
          type="button"
          onClick={handleClickCloseBtn}
        >
          <SvgIconDesignersX width={24} height={24} />
        </button>
      )}
    </section>
  );
};

export default Chip;
