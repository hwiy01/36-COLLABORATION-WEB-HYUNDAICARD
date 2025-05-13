import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider></ThemeProvider>
      </QueryClientProvider>
   </>
  )
}

export default App;
