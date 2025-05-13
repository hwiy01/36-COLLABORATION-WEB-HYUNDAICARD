// import type { ReactNode } from "react";

import { baseTextButtonContainer } from "./text-button.css";

interface TextButtonProps {
	// text: string;
	// img: ReactNode;
}

const TextButton = ({}: TextButtonProps) => {
	return (
		<button className={baseTextButtonContainer}>
			<p>{`전체보기`}</p>
			<p>{">"}</p>
		</button>
	);
};

export default TextButton;
