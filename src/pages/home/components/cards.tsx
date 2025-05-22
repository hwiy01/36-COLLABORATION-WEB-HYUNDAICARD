import Card from "@/shared/components/card/card";
import * as styles from "./cards.css";
import { useGetCards } from "../hooks/get-cards";
import TagAmexLivelife1 from "src/assets/svg/TagAmexLivelife1";
import TextButton from "@/shared/components/text-button/text-button";

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
      {HYUNDAI_ORIGINALS && (
        <section className={styles.brandSection.default}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>Hyundai Originals</h2>
            <p className={styles.brandDescription}>
              {HYUNDAI_ORIGINALS.cards?.[0]?.description ?? ""}
            </p>
            <TextButton />
          </div>
          <div className={styles.cardList.default}>
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
      {AMERICAN_EXPRESS && (
        <section className={styles.brandSection.wide}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>American Express</h2>
            <TagAmexLivelife1 />
            <TextButton />
          </div>
          <div className={styles.cardList.wide}>
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
      {CHAMPION_BRANDS && (
        <section className={styles.brandSection.default}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>Champion Brands</h2>
            <p className={styles.brandDescription}>
              {CHAMPION_BRANDS.cards?.[0]?.description ?? ""}
            </p>
            <TextButton />
          </div>
          <div className={styles.cardList.default}>
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
