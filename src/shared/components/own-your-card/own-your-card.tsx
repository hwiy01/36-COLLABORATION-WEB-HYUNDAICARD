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
  flag: boolean;
}

const OwnYourCard = ({ onClick, flag = false }: OwnYourCardProps) => {
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
        {flag && <span className={flagComment}>내게 맞는 카드 확인하기</span>}
      </button>
    </section>
  );
};

export default OwnYourCard;
