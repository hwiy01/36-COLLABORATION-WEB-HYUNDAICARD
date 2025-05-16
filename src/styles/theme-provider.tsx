import type { ReactNode } from "react";
import { themeClass } from "./theme.css";
import "../styles/global.css";

interface ThemeProviderProps {
  children: ReactNode;
  theme?: string;
  className?: string;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <div className={themeClass}>{children}</div>;
}
