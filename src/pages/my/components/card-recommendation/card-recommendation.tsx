import CardInfo from "./card-info/card-info";
import * as styles from "./card-recommendation.css";
import Header from "./header/header";
import MainCard from "./main-card/main-card";

export interface CardRecommendationProps {
  highlightText: string;
  mainCard: {
    name: string;
    imageUrl: string;
    benefits: {
      title: string;
      details: string;
    }[];
  };
  selectedFilters: {
    title: string;
    tags: string[];
  };
}

export default function CardRecommendation({
  highlightText,
  mainCard,
  selectedFilters,
}: CardRecommendationProps) {
  return (
    <div className={styles.container}>
      <Header highlightText={highlightText} />

      <div className={styles.infoContainer}>
        <MainCard
          cardImage={mainCard.imageUrl}
          selectedFilters={selectedFilters}
        />
        <CardInfo cardName={mainCard.name} benefits={mainCard.benefits} />
      </div>
    </div>
  );
}
