import { cardContainer, cardNameSpan } from "./card.css";
import type { ReactNode } from "react";

type CardMode = "vertical" | "horizontal"; // vertical : 세로 모드, horizontal : 가로 모드

interface CardProps {
	mode?: CardMode;
	cardIcon: ReactNode;
	cardName?: string; // 카드 이름
}

const Card = ({ mode = "vertical", cardIcon, cardName = "" }: CardProps) => {
	return (
		<section className={cardContainer[mode]}>
			{cardIcon}
			<span className={cardNameSpan[mode]}>{cardName}</span>
		</section>
	);
};

export default Card;
