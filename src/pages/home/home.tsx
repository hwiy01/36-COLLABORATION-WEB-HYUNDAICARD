import { $api } from "@/shared/apis/config";
import Posts from "./components/posts";
import { Sidebar } from "./components/sidebar/sidebar";
import * as styles from "./home.css";

import { END_POINTS } from "@/shared/apis/end-point";
import { useCarouselProgressSync } from "./hooks/use-carousel-progress-sync";
import { carouselImgList } from "@/shared/mocks/mockImgList";
import { Carousel } from "@/shared/components/carousel/carousel";
import ProgressBar from "@/shared/components/progress-bar/progress-bar";
import OneYourCardContainer from "./components/own-your-card-container";
import Cards from "./components/cards";

const Home = () => {
  const { data: postsData } = $api.useQuery("get", END_POINTS.posts);
  const { data: cardsData } = $api.useQuery("get", END_POINTS.cards);
  const INTERVAL = 5000;
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
    <section className={styles.homeContainer}>
      <main className={styles.mainContent}>
        <section className={styles.carouselContainer} aria-label="메인 캐러셀">
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

        <section
          className={styles.oneYourCardContainer}
          aria-label="당신의 카드"
        >
          <OneYourCardContainer />
        </section>

        <section
          className={styles.eventCardContainer}
          aria-label="이벤트 카드 목록"
        >
          <Cards cardsData={cardsData?.data || []} />
        </section>

        <section className={styles.eventCardContainer} aria-label="게시글 목록">
          <Posts postsData={postsData?.data || []} />
        </section>
      </main>

      <aside className={styles.sidebarFixed} aria-label="사이드바">
        <Sidebar />
      </aside>
    </section>
  );
};

export default Home;
