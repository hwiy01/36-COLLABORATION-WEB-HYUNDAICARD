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
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
