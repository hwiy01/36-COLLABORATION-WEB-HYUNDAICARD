import { mainContainer } from "@/pages/own-your-card/own-your-card.css";
import { $api } from "@/shared/apis/config";
import { END_POINTS } from "@/shared/apis/end-point";
import Loading from "@/shared/pages/loading";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CardRecommendation, {
  type CardRecommendationProps,
} from "./card-recommendation/card-recommendation";
import { OtherRecommendation } from "./card-recommendation/other-recommendation/other-recommendation";
import { RecommendationDescription } from "./card-recommendation/recommendation-description/recommendation-description";
import type { SliderInfo } from "./range-slider/get-range-slider-idx";

interface OwnYourCardMainProps {
  sliderInfo: SliderInfo;
}

const OwnYourCardMain = ({ sliderInfo }: OwnYourCardMainProps) => {
  const [searchParams] = useSearchParams();

  const selectedTagIds = useMemo(() => {
    return searchParams.get("tags")?.split(",") || [];
  }, [searchParams]);

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

  // 로딩 중일 때
  if (isPending) {
    return <Loading />; // return 빠뜨렸음
  }

  // 데이터가 없을 때 처리
  if (!searchResult?.data?.mainCard) {
    return (
      <div className={mainContainer}>
        <p>카드 정보를 불러올 수 없습니다.</p>
      </div>
    );
  }

  const mainCard = searchResult.data.mainCard;
  const otherCard = searchResult.data.otherRecommendationCards || [];
  const selectedFilters = {
    title: mainCard.benefits?.[0]?.title || "카드 혜택",
    tags: selectedTagIds,
  };

  const cardRecommendationProps: CardRecommendationProps = {
    highlightText:
      searchResult.data.recommendationCategoriesDto?.recommendedStyle?.title ||
      "",
    mainCard: {
      name: mainCard.name || "카드명 없음",
      imageUrl: mainCard.imageUrl || "",
      benefits:
        mainCard.benefits?.map((benefit) => ({
          title: benefit.title || "혜택 제목 없음",
          details: benefit.details || "혜택 설명 없음",
        })) || [],
    },
    selectedFilters,
  };

  return (
    <div className={mainContainer}>
      <CardRecommendation
        highlightText={cardRecommendationProps.highlightText}
        mainCard={cardRecommendationProps.mainCard}
        selectedFilters={cardRecommendationProps.selectedFilters}
      />
      <RecommendationDescription selectedFilters={selectedFilters.tags} />
      <OtherRecommendation otherCards={otherCard} />
    </div>
  );
};

export default OwnYourCardMain;
