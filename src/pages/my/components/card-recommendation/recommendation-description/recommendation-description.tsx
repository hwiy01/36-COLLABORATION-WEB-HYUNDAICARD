import Chip from "@/shared/components/chips/chip";
import { IconM, IconTruck } from "src/assets/svg";
import { subTitle } from "../header/header.css";
import {
  chipContainer,
  container,
  content,
  contentContainer,
  contentTitle,
  description,
  textContainer,
  title,
} from "./recommendation-description.css";

interface RecommendationDescriptionProps {
  selectedFilters: string[];
}

export const RecommendationDescription = ({
  selectedFilters = [],
}: RecommendationDescriptionProps) => {
  return (
    <div className={container}>
      {/* 추천 기준 */}
      <div className={contentContainer}>
        <div className={title}>추천 기준</div>
        <div className={content}>
          <div className={textContainer}>
            <div className={subTitle}>내가 선택한 필터</div>
            <div className={contentTitle}>라이프스타일 / 여행</div>
            <div className={chipContainer}>
              {selectedFilters.length === 0
                ? null
                : selectedFilters.map((filter) => (
                    <Chip key={filter} mode="selected" content={filter} />
                  ))}
            </div>
          </div>
          <div></div>
          <div style={{ marginBottom: "10rem" }}>
            <IconM width="4rem" />
          </div>
        </div>
      </div>

      {/* 추천 카드 스타일 */}
      <div className={contentContainer}>
        <div className={title}>추천 카드 스타일</div>
        <div className={content}>
          <div className={textContainer}>
            <div className={subTitle}>나는 어떤 카드가 어울릴까?</div>
            <div className={contentTitle}>
              가치있는 여행을 위한
              <br />
              라이프스타일 카드
            </div>
            <div className={description}>
              단순한 지출이 아닌 가치 있는 경험 <br />
              프리미엄 라이프스타일을 아우르는 <br />
              Boutique - Velvet 카드
            </div>
          </div>
          <div style={{ marginBottom: "10rem" }}>
            <IconTruck width="6rem" />
          </div>
        </div>
      </div>
    </div>
  );
};
