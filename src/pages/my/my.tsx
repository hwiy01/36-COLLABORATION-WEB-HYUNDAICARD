import OwnYourCard from "../own-your-card/own-your-card";
import SpinCardLottie from "./components/spin-card-lottie";

import { useParams, useSearchParams } from "react-router-dom";
import OtherRecommendedCards from "./components/other-recommended-cards/other-recommended-cards";
import { useGetSliderInfo } from "./components/range-slider/get-range-slider-idx";
import * as styles from "./my.css";

const My = () => {
  const [serachParams] = useSearchParams();
  const { sliderInfo } = useGetSliderInfo();

  return (
    <section className={styles.myContainer}>
      <aside style={{ width: "26.6rem" }}>
        <OwnYourCard sliderInfo={sliderInfo} />
      </aside>
      {serachParams.size === 0 ? (
        <div className={styles.lottieContainer}>
          <SpinCardLottie />
        </div>
      ) : (
        <OtherRecommendedCards sliderInfo={sliderInfo}></OtherRecommendedCards>
      )}
    </section>
  );
};

export default My;
