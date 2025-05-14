import { getSizeByContent } from "@/shared/utils/getSizeByContent";
import { useState } from "react";
import SvgIconDesignersDown from "src/assets/svg/IconDesigner'sDown";
import SvgIconDesignersUp from "src/assets/svg/IconDesigner'sUp";
import SvgIconDesignersX from "src/assets/svg/IconDesigner'sX";
import { baseFrame, frameSizes, innerFrame, otherModeStyle } from "./chip.css";

export type mode = "input" | "filter" | "selected" | "dropdown";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // 외부에서 준 flag로 드롭다운 화살표 바꿀지, 이거로 할지 인영님이랑 얘기하기

  const size = getSizeByContent(content, mode);

  if (mode === "dropdown") {
    return (
      <button
        className={baseFrame}
        onClick={() => {
          setIsDropdownOpen((prev) => !prev);
        }}
        type="button"
      >
        <section className={innerFrame}>
          <p>{content}</p>
          {isDropdownOpen ? (
            <SvgIconDesignersDown width={24} height={24} />
          ) : (
            <SvgIconDesignersUp width={24} height={24} />
          )}
        </section>
      </button>
    );
  }

  return (
    <div style={{ backgroundColor: "red" }}>
      <section className={`${frameSizes[size]} ${otherModeStyle[mode]}`}>
        <p>{content}</p>
        {mode === "input" && (
          <button
            style={{ display: "none" }}
            type="button"
            onClick={handleClickCloseBtn}
          >
            <SvgIconDesignersX width={24} height={24} />
          </button>
        )}
      </section>
    </div>
  );
};

export default Chip;
