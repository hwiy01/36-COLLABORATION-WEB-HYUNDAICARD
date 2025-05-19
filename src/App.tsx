import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import Router from "@/shared/router/router";
import { BrowserRouter } from "react-router-dom";

import MainCard from "./pages/my/components/main-card/main-card";

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
          <MainCard
            frontImage="https://sopt-hyndai-card.s3.ap-northeast-2.amazonaws.com/card-thumbnails/card_boutique_velvet.svg"
            backContent={
              <div>
                <p>적용된 필터</p>
              </div>
            }
          />
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
