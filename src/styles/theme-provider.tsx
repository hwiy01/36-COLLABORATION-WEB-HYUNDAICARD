import { type ReactNode } from "react";
import { themeClass } from "./theme.css";

interface ThemeProviderProps {
    children: ReactNode;
    theme?: string;
    className?: string;
}

export default function ThemeProvider({ theme, className, children }: ThemeProviderProps) {
    const mergedClassName = [theme ?? themeClass, className].filter(Boolean).join(" ");
    return <div className={mergedClassName}>{children}</div>;
}
