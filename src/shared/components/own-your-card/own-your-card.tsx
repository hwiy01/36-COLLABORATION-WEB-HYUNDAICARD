import { HcLogo } from "src/assets/svg";
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
			<button onClick={onClick} className={`${cardEntry} ${cardHoverEffect}`}>
				<div className={cardOverlay}></div>
				<HcLogo
					className={logoStyle}
					width={175.66017150878906}
					height={34.51904296875}
				/>
				{flag && <span className={flagComment}>내게 맞는 카드 확인하기</span>}
			</button>
		</section>
	);
};

export default OwnYourCard;
