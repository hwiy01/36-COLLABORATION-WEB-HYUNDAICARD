import { useSearchParams } from "react-router-dom";
import OwnYourCardMain from "../my/components/own-your-card-main";
import { useGetSliderInfo } from "../my/components/range-slider/get-range-slider-idx";
import SpinCardLottie from "../my/components/spin-card-lottie";
import { useTagFilter } from "../my/hooks/tag-filter";
import { lottieContainer } from "../my/my.css";
import {
  asideContainer,
  mainContainer,
  pageConatiner,
} from "./own-your-card.css";
import SideBar from "./side-bar/side-bar";

const OwnYourCard = () => {
  const { tags, toggleTag, resetTagSelected } = useTagFilter();
  const [serachParams] = useSearchParams();
  const { sliderInfo } = useGetSliderInfo();
  return (
    <div className={pageConatiner}>
      <aside className={asideContainer}>
        <SideBar
          tags={tags}
          toggleTag={toggleTag}
          resetTag={resetTagSelected}
          sliderInfo={sliderInfo}
        ></SideBar>
      </aside>
      <main className={mainContainer}>
        {serachParams.size === 0 ? (
          <div className={lottieContainer}>
            <SpinCardLottie />
          </div>
        ) : (
          <OwnYourCardMain sliderInfo={sliderInfo}></OwnYourCardMain>
        )}
      </main>
    </div>
  );
};

export default OwnYourCard;
