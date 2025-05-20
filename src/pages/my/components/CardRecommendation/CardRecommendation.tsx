import MainCard from "./main-card/main-card";
import Header from "./header/header";
import CardInfo from "./card-info/card-info";
import * as styles from "./CardRecommendation.css";
const selectedFilters = {
  title: "라이프스타일 / 여행",
  tags: ["여행", "오프라인 쇼핑", "커피"],
};

export default function CardRecommendation() {
  return (
    <div className={styles.container}>
      <Header highlightText="프리미엄 소비" />

      <div className={styles.infoContainer}>
        <MainCard
          cardImage="..." // 아직 사용 중이진 않지만 유지
          selectedFilters={selectedFilters}
        />
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
