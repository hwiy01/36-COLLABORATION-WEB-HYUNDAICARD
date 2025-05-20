import Router from "@/shared/router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";

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
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
