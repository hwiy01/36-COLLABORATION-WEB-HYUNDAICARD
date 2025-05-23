import type { components } from "@/shared/types/api";
import {
  container,
  content,
  subTitle,
  title,
  titleContainer,
} from "./other-recommendation.css";
import OtherRecommendedCards from "./other-recommended-cards/other-recommended-cards";

interface OtherCardProps {
  otherCards: {
    id?: string;
    name?: string;
    imageUrl?: string;
    paymentNetwork?: "VISA" | "MASTER" | "AMEX";
    benefits?: components["schemas"]["CardBenefitDto"][];
    buttonNode?: string;
  }[];
}

export const OtherRecommendation = ({ otherCards }: OtherCardProps) => {
  return (
    <>
      <div className={container}>
        <div className={titleContainer}>
          <div className={title}>다른 추천 카드</div>
          <div className={subTitle}>한 끗 차이, 이 카드들도 잘 맞아요</div>
        </div>
        <div className={content}>
          {otherCards.map((otherCard, index) => {
            const firstBenefit = otherCard.benefits?.[0] || {
              title: "혜택 정보 없음",
              details: "상세 정보 없음",
            };
            return (
              <OtherRecommendedCards
                index={index}
                key={otherCard.id}
                cardName={otherCard.name || "카드명 없음"}
                title={firstBenefit.title}
                details={firstBenefit.details}
                paymentNetwork={otherCard.paymentNetwork || ""}
                imageUrl={otherCard.imageUrl || ""}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
