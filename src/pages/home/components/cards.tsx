import Card from "@/shared/components/card/card";
import * as styles from "./cards.css";
import { useGetCards } from "../hooks/get-cards";
import TagAmexLivelife1 from "src/assets/svg/TagAmexLivelife1";

const Cards = () => {
  const { data } = useGetCards();

  const HYUNDAI_ORIGINALS = data.find(
    (group) => group.brand === "HYUNDAI_ORIGINALS",
  );
  const AMERICAN_EXPRESS = data.find(
    (group) => group.brand === "AMERICAN_EXPRESS",
  );
  const CHAMPION_BRANDS = data.find(
    (group) => group.brand === "CHAMPION_BRANDS",
  );

  return (
    <div className={styles.pageContainer}>
      {/* 현대 오리지널 */}
      {HYUNDAI_ORIGINALS && (
        <section className={styles.brandSection}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>Hyundai Originals</h2>
            <p className={styles.brandDescription}>
              {HYUNDAI_ORIGINALS.cards?.[0]?.description ?? ""}
            </p>
          </div>
          <div className={styles.cardList}>
            {HYUNDAI_ORIGINALS.cards?.map((card) => (
              <Card
                key={card.name}
                mode="vertical"
                cardIcon={<img src={card.imageUrl} alt={card.name} />}
                cardName={card.name}
              />
            ))}
          </div>
        </section>
      )}
      {/* 아메리칸 익스프레스 */}
      {AMERICAN_EXPRESS && (
        <section className={styles.brandSection2}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>American Express</h2>
            <TagAmexLivelife1 />
          </div>
          <div className={styles.cardList2}>
            {AMERICAN_EXPRESS.cards?.map((card) => (
              <Card
                key={card.name}
                mode="horizontal"
                cardIcon={<img src={card.imageUrl} alt={card.name} />}
                cardName={card.name}
              />
            ))}
          </div>
        </section>
      )}
      {/* 챔피언 브랜드 */}
      {CHAMPION_BRANDS && (
        <section className={styles.brandSection}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>Champion Brands</h2>
            <p className={styles.brandDescription}>
              {CHAMPION_BRANDS.cards?.[0]?.description ?? ""}
            </p>
          </div>
          <div className={styles.cardList}>
            {CHAMPION_BRANDS.cards?.map((card) => (
              <Card
                key={card.name}
                mode="vertical"
                cardIcon={<img src={card.imageUrl} alt={card.name} />}
                cardName={card.name}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Cards;
