import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import Router from "@/shared/router/router";
import { BrowserRouter } from "react-router-dom";

import ProgressBar from "./shared/components/progress-bar/progress-bar";
//글로벌 스타일
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
          <ReactQueryDevtools initialIsOpen={false} />
          <ProgressBar
            activeIndex={0}
            onChange={(newIndex) => {
              console.log(newIndex);
            }}
          />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
