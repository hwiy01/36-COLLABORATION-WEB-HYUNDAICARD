import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import Router from "@/shared/router/router";
import { BrowserRouter } from "react-router-dom";

import MainEvent from "./shared/components/main-event/main-event";
import "./styles/global.css";

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
          <MainEvent
            cardIcon={<img src="/images/card1.png" alt="현대카드" />}
            line1="현대카드 Boutique 신규 회원"
            line2="연회비 캐시백 이벤트"
          />
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
