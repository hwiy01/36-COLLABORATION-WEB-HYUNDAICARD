import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import Router from "@/shared/router/router";
import { BrowserRouter } from "react-router-dom";
import { mockImgList } from "./shared/mocks/mockImgList";
import { Carousel } from "./shared/components/carousel/carousel";

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
        <Carousel width={94.4} height={37.5} imgList={mockImgList}/>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
