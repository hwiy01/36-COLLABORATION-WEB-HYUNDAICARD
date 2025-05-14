import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./shared/utils/query-client";
import ThemeProvider from "./styles/theme-provider";
import Router from "@/shared/router/router";
import { BrowserRouter } from "react-router-dom";

import LoginButton from "./shared/components/login-button/login-button";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider>
            {/* 테스트용 버튼 */}
            <div>
              <LoginButton variant="blackGray" size="small">
                로그인
              </LoginButton>
              <LoginButton variant="whiteGray" size="small">
                회원가입
              </LoginButton>
              <LoginButton variant="blackGray" size="large">
                간편번호 등록
              </LoginButton>
              <LoginButton variant="whiteGray" size="medium">
                현대카드 앱
              </LoginButton>
            </div>

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
