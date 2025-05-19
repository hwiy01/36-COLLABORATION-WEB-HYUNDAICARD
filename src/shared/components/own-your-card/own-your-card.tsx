import { SvgHyunddaiSymbol } from "src/assets/svg";
import {
  cardContainer,
  cardEntry,
  cardHoverEffect,
  cardOverlay,
  flagComment,
  logoStyle,
} from "./own-your-card.css";

interface OwnYourCardProps {
  onClick: () => void;
  showText: boolean;
}

const OwnYourCard = ({ onClick, showText = false }: OwnYourCardProps) => {
  return (
    <section className={cardContainer}>
      <button
        type="button"
        onClick={onClick}
        className={`${cardEntry} ${cardHoverEffect}`}
      >
        <div className={cardOverlay}></div>
        <SvgHyunddaiSymbol
          className={logoStyle}
          width={"17.6rem"}
          height={"3.342rem"}
        />
        {showText && <p className={flagComment}>내게 맞는 카드 확인하기</p>}
      </button>
    </section>
  );
};

export default OwnYourCard;
