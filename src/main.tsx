import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import Chip from "./shared/components/chips/chip.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Chip mode="input" content="안녕" />
  </StrictMode>,
);
