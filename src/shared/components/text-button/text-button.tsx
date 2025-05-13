import type { ReactNode } from "react";
import { baseTextButtonContainer, buttonText } from "./text-button.css";
import { RightArrow } from "src/assets/svg";

interface TextButtonProps {
	text?: string; // 버튼 내부에 작성할 문구
	img?: ReactNode; // gap : 4 뒤에 렌더링할 요소(ex. 이미지)
}

/**
 *
 * @param text 버튼 내부에 작성할 문구
 * @param img gap : 4 뒤에 렌더링할 요소(ex. 이미지)
 * @returns
 */
const TextButton = ({
	text = "전체보기",
	img = <RightArrow width={5} height={5} />,
}: TextButtonProps) => {
	return (
		<button className={baseTextButtonContainer}>
			<span className={buttonText}>{text}</span>
			{img}
		</button>
	);
};

export default TextButton;
