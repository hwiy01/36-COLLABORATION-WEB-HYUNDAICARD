import { HcLogo } from "src/assets/svg";
import {
	cardContainer,
	cardEntry,
	cardHoverEffect,
	cardOverlay,
	flagComment,
	logoStyle,
} from "./own-your-card.css";

const OwnYourCard = () => {
	return (
		<section className={cardContainer}>
			<section className={`${cardEntry} ${cardHoverEffect}`}>
				<div className={cardOverlay}></div>
				<HcLogo
					className={logoStyle}
					width={175.66017150878906}
					height={34.51904296875}
				/>
				<span className={flagComment}>내게 맞는 카드 확인하기</span>
			</section>
		</section>
	);
};

export default OwnYourCard;
