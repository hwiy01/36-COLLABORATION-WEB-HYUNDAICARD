import Router from "@/shared/router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";

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
          <MainCard cardImage="https://sopt-hyndai-card.s3.ap-northeast-2.amazonaws.com/card-thumbnails/card_boutique_velvet.svg">
            {/* overlayContent 영역 */}
            <div>
              <div>CHIP</div>
            </div>
          </MainCard>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
