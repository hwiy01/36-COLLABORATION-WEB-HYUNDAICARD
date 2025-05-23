import { useGetSliderInfo } from "../my/components/range-slider/get-range-slider-idx";
import { useTagFilter } from "../my/hooks/tag-filter";
import { pageConatiner } from "./own-your-card.css";
import SideBar from "./side-bar/side-bar";

const OwnYourCard = () => {
  const { tags, toggleTag, resetTagSelected } = useTagFilter();
  const { sliderInfo } = useGetSliderInfo();
  return (
    <div className={pageConatiner}>
      <SideBar
        tags={tags}
        toggleTag={toggleTag}
        resetTag={resetTagSelected}
        sliderInfo={sliderInfo}
      ></SideBar>
    </div>
  );
};

export default OwnYourCard;
