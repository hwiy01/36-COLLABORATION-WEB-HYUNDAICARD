import { $api } from "@/shared/apis/config";
import Posts from "./components/posts";
import OneYourCardContainer from "./one-your-card/one-your-card-container";

import * as styles from "./home.css";

import { END_POINTS } from "@/shared/apis/end-point";
import { useCarouselProgressSync } from "./hooks/use-carousel-progress-sync";
import { carouselImgList } from "@/shared/mocks/mockImgList";
import { Carousel } from "@/shared/components/carousel/carousel";
import ProgressBar from "@/shared/components/progress-bar/progress-bar";

const Home = () => {
  const { data: postsData } = $api.useQuery("get", END_POINTS.posts);
    const INTERVAL = 5000; // 캐러셀이 다음 페이지로 슬라이드되는 시간 간격
  const SLIDECOUNT = carouselImgList.length;
  const {
    displayIndex,
    progressbarIndex,
    carouselTransition,
    onMoveNext, 
    onMovePrev,
    goTo, 
    togglePlay,
    playing,
    handleTransitionEnd,
  } = useCarouselProgressSync(INTERVAL, SLIDECOUNT);

  return (
    <>
      <section className={styles.homeContainer}>
        <section className={styles.carouselContainer}>
            <Carousel
              size={"large"}
              imgList={carouselImgList}
              displayIndex={displayIndex}
              onMoveNext={onMoveNext}
              onMovePrev={onMovePrev}
              onTransitionEnd={handleTransitionEnd}
              transitionStyle={carouselTransition}
            />
            <ProgressBar
              activeIndex={progressbarIndex}
              slideCount={SLIDECOUNT}
              playing={playing}
              onChange={goTo}
              togglePlay={togglePlay}
            />
        </section>
        <section className={styles.oneYourCardContainer}>
          <OneYourCardContainer />
        </section>
        <section className={styles.eventCardContainer}>
          <Posts postsData={postsData?.data || []} />
        </section>
      </section>
    </>
  );
};
export default Home;
