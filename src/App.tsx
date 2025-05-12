import ThemeProvider from "./styles/theme-provider";
import "./styles/font/font.css";
import { fontStyles } from "./styles/tokens/font-styles.css";
function App() {
    return (
        <ThemeProvider>
            <p className={fontStyles.hyundai_body2_14}>hyundai_body2_14 - 14px</p>
        </ThemeProvider>
    );
}

export default App;
