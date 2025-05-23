import Card from "@/shared/components/card/card";
import * as styles from "./cards.css";
import TagAmexLivelife1 from "src/assets/svg/TagAmexLivelife1";
import TextButton from "@/shared/components/text-button/text-button";
import type { components } from "@/shared/types/api";

type Card = components["schemas"]["CardBrandGroupDto"];

interface CardProps {
  cardsData: Card[];
}

const Cards = ({ cardsData }: CardProps) => {
  const HYUNDAI_ORIGINALS = cardsData.find(
    (group) => group.brand === "HYUNDAI_ORIGINALS",
  );
  const AMERICAN_EXPRESS = cardsData.find(
    (group) => group.brand === "AMERICAN_EXPRESS",
  );
  const CHAMPION_BRANDS = cardsData.find(
    (group) => group.brand === "CHAMPION_BRANDS",
  );

  console.log("cardsData", cardsData);

  return (
    <div className={styles.pageContainer}>
      {HYUNDAI_ORIGINALS && (
        <section className={styles.brandSection({ size: "default" })}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>Hyundai Originals</h2>
            <p className={styles.brandDescription}>
              {HYUNDAI_ORIGINALS.cards?.[0]?.description ?? ""}
            </p>
            <TextButton />
          </div>
          <div className={styles.cardList({ columns: "default" })}>
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
        <section className={styles.brandSection({ size: "wide" })}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>American Express</h2>
            <TagAmexLivelife1 />
            <TextButton />
          </div>
          <div className={styles.cardList({ columns: "wide" })}>
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
        <section className={styles.brandSection({ size: "default" })}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>Champion Brands</h2>
            <p className={styles.brandDescription}>
              {CHAMPION_BRANDS.cards?.[0]?.description ?? ""}
            </p>
            <TextButton />
          </div>
          <div className={styles.cardList({ columns: "default" })}>
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
