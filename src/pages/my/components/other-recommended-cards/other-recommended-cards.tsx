import { $api } from "@/shared/apis/config";
import { END_POINTS } from "@/shared/apis/end-point";
import Loading from "@/shared/pages/loading";
import type { components } from "@/shared/types/api";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageVisa } from "src/assets/svg";
import { Mastercard } from "src/assets/svg";
import type { SliderInfo } from "../range-slider/get-range-slider-idx";
import * as styles from "./other-recommended-cards.css";

type SearchedCardDto = components["schemas"]["SearchedCardDto"];
type PaymentNetwork =
  components["schemas"]["SearchedCardDto"]["paymentNetwork"];

interface OtherRecommendedCardsProps {
  sliderInfo: SliderInfo;
}

const OtherRecommendedCards = ({ sliderInfo }: OtherRecommendedCardsProps) => {
  const [searchParams] = useSearchParams();

  const selectedTagIds = useMemo(() => {
    return searchParams.get("tags")?.split(",") || [];
  }, [searchParams]);

  console.log(selectedTagIds);
  const {
    mutate: searchCards,
    data: searchResult,
    isPending,
  } = $api.useMutation("post", END_POINTS.search);

  useEffect(() => {
    if (selectedTagIds.length > 0) {
      searchCards({
        body: {
          filters: {
            tagIds: selectedTagIds,
            annualFeeRange: {
              min: sliderInfo.minIndex,
              max: sliderInfo.maxIndex,
            },
          },
        },
      });
    }
  }, [selectedTagIds, sliderInfo.maxIndex, sliderInfo.minIndex, searchCards]);

  console.log(searchResult);

  if (isPending) {
    <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <p className={styles.ranking}>1순위</p>
        <p className={styles.cardname}>zkemddkscjdslk</p>
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.cardimg}>
          <img src="" alt="card" />
        </div>
        <div className={styles.cardtext}>
          <div className={styles.svgcontainer}>
            <ImageVisa />
            <Mastercard />
          </div>
          <div className={styles.cardcontent}>
            <p className={styles.cardcontenttitle}>카드 이름</p>
            <p className={styles.cardcontentdetail}>카드 설명</p>
          </div>
          <button type="button" className={styles.applyButton}>
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default OtherRecommendedCards;
