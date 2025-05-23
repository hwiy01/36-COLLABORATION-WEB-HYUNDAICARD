import {
  container,
  content,
  subTitle,
  title,
  titleContainer,
} from "./other-recommendation.css";
import OtherRecommendedCards from "./other-recommended-cards/other-recommended-cards";

export const OtherRecommendation = () => {
  return (
    <>
      <div className={container}>
        <div className={titleContainer}>
          <div className={title}>다른 추천 카드</div>
          <div className={subTitle}>한 끗 차이, 이 카드들도 잘 맞아요</div>
        </div>
        <div className={content}>
          <OtherRecommendedCards />
          <OtherRecommendedCards />
        </div>
      </div>
    </>
  );
};
