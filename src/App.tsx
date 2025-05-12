import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./shared/utils/query-client";
import Router from "@/shared/router/router";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
				<div style={{ fontSize: "16px" }}>
					<ReactQueryDevtools initialIsOpen={false} />
				</div>
			</QueryClientProvider>
		</>
	);
}

export default App;
