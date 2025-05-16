import type { ReactNode } from "react";
import { cardContainer, cardNameP } from "./card.css";

interface CardProps {
  mode?: "vertical" | "horizontal"; // "vertical" | "horizontal"
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
      <p className={cardNameP[mode]}>{cardName}</p>
    </section>
  );
};

export default Card;
