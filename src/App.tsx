import Router from "@/shared/router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import { Dropdown } from "./shared/components/dropdown/dropdown";
import { useState } from "react";
import { mockDropdownList } from "./shared/mocks/mock-dropdown-list";

function App() {
  const [temp, setTemp] = useState(mockDropdownList[0]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider>
            <Router />
            <Dropdown content={'쇼핑/소비'} setSelectedItem={setTemp} dropdownList={mockDropdownList}/>
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
