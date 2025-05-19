import MainCard from "./main-card/main-card";
import Header from "./header/header";
import CardInfo from "./card-info/card-info";
import * as styles from "./CardRecommendation.css";

export default function CardRecommendation() {
  return (
    <div className={styles.container}>
      <Header highlightText="프리미엄 소비" />

      <div className={styles.infoContainer}>
        <MainCard cardImage="https://sopt-hyndai-card.s3.ap-northeast-2.amazonaws.com/card-thumbnails/card_boutique_velvet.svg">
          <div>
            <div>CHIP</div>
          </div>
        </MainCard>
        <CardInfo
          cardName="현대카드 Boutique"
          benefits={[
            {
              title: "해외 여행 시 혜택 강화",
              details:
                "해외 결제 시 우대 환율 적용과 여행자 보험이 포함되어 있어 자주 여행하는 \n사람에게 경제적이고 안전한 선택",
            },
          ]}
        />
      </div>
    </div>
  );
}
