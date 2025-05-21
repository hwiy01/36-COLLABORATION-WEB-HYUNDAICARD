import { getSizeByContent } from "@/shared/utils/get-size-by-content";
import { IconArrowDown, IconArrowUp, IconClose } from "src/assets/svg";
import { color } from "src/styles/tokens/color.css";
import {
  baseFrame,
  closeButton,
  dropdownFrame,
  frameSizes,
  innerFrame,
  otherModeStyle,
} from "./chip.css";

export type mode = "input" | "filter" | "selected" | "dropdown"; // 유틸함수에 타입 전달용

interface ChipProps {
  mode: "input" | "filter" | "selected" | "dropdown"; // 4가지 모드 중 하나
  content: string; // chip에 들어갈 내용
  dropdownFlag?: boolean;
  className?: string;
  contentStyle?: string;
  handleClickCloseBtn?: () => void;
  handleClickDropdown?: () => void;
}
/**
 *
 * @param mode "input" | "filter" | "selected" | "dropdown" 중 하나의 모드
 * @param content chip에 들어갈 내용, 내용의 길이 기반하여 width 자동 조절
 * @param handleClickCloseBtn mode = "input"일 때 생기는 x 버튼 click에 부여할 함수
 * @param handleClickDropdown mode = "dropdown"일 때 dropdown 클릭했을 때 부여할 함수
 * @param dropdownFlag mode = "dropdown"일 때 화살표 모양 control
 * @returns
 */
const Chip = ({
  mode = "dropdown",
  content,
  dropdownFlag,
  handleClickCloseBtn,
  handleClickDropdown,
}: ChipProps) => {
  const size = getSizeByContent(content, mode);

  if (mode === "dropdown") {
    return (
      <button className={`${baseFrame} ${otherModeStyle[mode]}`} onClick={handleClickDropdown} type="button">
        <section className={innerFrame}>
          <div>{content}</div>
          {dropdownFlag ? (
            <IconArrowDown width={24} height={24} />
          ) : (
            <IconArrowUp width={24} height={24} />
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
          <IconClose stroke={color.h_primary_blue} width={24} height={24} />
        </button>
      )}
    </section>
  );
};

export default Chip;
