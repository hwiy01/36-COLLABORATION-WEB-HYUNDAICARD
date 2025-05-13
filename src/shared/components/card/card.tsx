import { cardContainer, cardNameSpan } from "./card.css";
import type { ReactNode } from "react";

type CardMode = "vertical" | "horizontal"; // vertical : 세로 모드, horizontal : 가로 모드

interface CardProps {
	mode?: CardMode; // "vertical" | "horizontal"
	cardIcon: ReactNode;
	cardName?: string; // 카드 이름
}

/**
 * 
 * @param mode "vertical(세로)" | "horizontal(가로)" 중 하나 입력 default = "vertical"
 * @param cardIcon 렌더링 시킬 요소
 * @param cardName 카드 이름
 */
const Card = ({ mode = "vertical", cardIcon, cardName = "" }: CardProps) => {
	return (
		<section className={cardContainer[mode]}>
			{cardIcon}
			<span className={cardNameSpan[mode]}>{cardName}</span>
		</section>
	);
};

export default Card;
