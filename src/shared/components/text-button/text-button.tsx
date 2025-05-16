import type { MouseEvent, ReactNode } from "react";
import { RightArrow } from "src/assets/svg";
import { baseTextButtonContainer, buttonText } from "./text-button.css";

interface TextButtonProps {
  text?: string; // 버튼 내부에 작성할 문구
  img?: ReactNode; // gap : 4 뒤에 렌더링할 요소(ex. 이미지)
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // 마우스 click시 이벤트
}

/**
 *
 * @param text 버튼 내부에 작성할 문구
 * @param img gap : 4 뒤에 렌더링할 요소(ex. 이미지)
 * @param onClick void 반환 형식, 마우스 클릭했을 때 이벤트
 * @returns
 */
const TextButton = ({
  text = "전체보기",
  img = <RightArrow width={"0.5rem"} height={"0.5rem"} />,
}: TextButtonProps) => {
  return (
    <button type="button" className={baseTextButtonContainer}>
      <p className={buttonText}>{text}</p>
      {img}
    </button>
  );
};

export default TextButton;
