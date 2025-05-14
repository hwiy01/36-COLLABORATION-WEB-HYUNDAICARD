import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import OwnYourCard from "./pages/own-your-card/own-your-card.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <OwnYourCard />
  </StrictMode>,
);
