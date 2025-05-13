import type { ReactNode } from "react";
import { baseTextButtonContainer, buttonText } from "./text-button.css";
import { RightArrow } from "src/assets/svg";

interface TextButtonProps {
	text?: string;
	img?: ReactNode;
}

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
