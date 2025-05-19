import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import Router from "@/shared/router/router";
import { BrowserRouter } from "react-router-dom";
import { Carousel } from "./shared/components/carousel/carousel";
import { mockImgList } from "./shared/mocks/mockImgList";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
        <div style={{ fontSize: "16px" }}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Carousel width={94.4} height={37.5} imgList={mockImgList}/>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
