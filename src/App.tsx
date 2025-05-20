import Router from "@/shared/router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import { Carousel } from "./shared/components/carousel/carousel";
import { mockImgList } from "./shared/mocks/mockImgList";
import ProgressBar from "./shared/components/progress-bar/progress-bar";
import { useCarouselProgressSync } from "./shared/components/carousel/use-carousel-progress-sync";

function App() {
  const INTERVAL = 5000;
  const SLIDECOUNT = mockImgList.length;

/**
 * @property {number} displayIndex - 리스트 첫/마지막 에 클론이 추가된 인덱스
 * @property {number} progressbarIndex - 프로그래스바에서 보여질, 실제 리스트와 일치하는 인덱스
 * @property {string} carouselTransition - 캐러셀 CSS transition 문자열
 * @property {() => void} onMoveNext - 다음 슬라이드 이동 (화살표 사용)
 * @property {() => void} onMovePrev  - 이전 슬라이드 이동 (화살표 사용)
 * @property {(index: number) => void} goTo  - 특정 슬라이드 인덱스로 이동 (프로그래스바 클릭 시 사용)
 * @property {() => void} togglePlay - 자동 재생의 재생/정지 토글 함수
 * @property {boolean} playing - 현재 자동 재생 중인지 여부
 * @property {(displayIndex: number) => void} handleTransitionEnd - 트랜지션 종료 후 index 보정 처리
 * @property {React.MutableRefObject<boolean>} isAnimatingRef - 현재 캐러셀이 애니메이션 중인지 여부를 나타내는 ref
 */

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10rem"}}>
            <Carousel
              width={94.4}
              height={37.5}
              imgList={mockImgList}
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
          </div>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
