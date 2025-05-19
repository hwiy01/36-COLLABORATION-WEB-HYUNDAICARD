import Router from "@/shared/router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import { Carousel } from "./shared/components/carousel/carousel";
import { mockImgList } from "./shared/mocks/mockImgList";
import ProgressBar from "./shared/components/progress-bar/progress-bar";
import { useState } from "react";

function App() {
  const INTERVAL = 5000;
  const TOTAL = mockImgList.length;
  const [logicalIndex, setLogicalIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(1); 

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <Router />

          <Carousel
            width={94.4}
            height={37.5}
            imgList={mockImgList}
            interval={INTERVAL}
            displayIndex={displayIndex}
            setCarouselIndex={setDisplayIndex}
            onLogicalIndexChange={(i) => setLogicalIndex(i)}
          />

          <ProgressBar
            activeIndex={logicalIndex}
            onChange={(i) => setDisplayIndex(i + 1)}
            total={TOTAL}
            interval={INTERVAL}
          />
        </ThemeProvider>
      </BrowserRouter>
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
