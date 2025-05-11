import "./styles/font/font.css";
import { fontStyles } from "./styles/tokens/font-styles.css"; // 경로는 프로젝트 구조에 따라 조정하세요

function App() {
    return (
        <>
            {" "}
            <h2>🍎 Apple SD Gothic Neo 스타일</h2>
            <p className={fontStyles.head1_extrabold}>head1_extrabold - 28px</p>
            <p className={fontStyles.title2_bold}>title2_bold - 16px</p>
            <p className={fontStyles.body1_medium}>body1_medium - 14px</p>
            <p className={fontStyles.caption_bold}>caption_bold - 10px</p>
            <hr style={{ margin: "2rem 0" }} />
            <h2>🅷 현대카드 YouandiModern 스타일</h2>
            <p className={fontStyles.hyundai_head40}>hyundai_head40 - 40px</p>
            <p className={fontStyles.hyundai_head40}>다람쥐</p>
            <p className={fontStyles.hyundai_title30}>hyundai_title30 - 30px</p>
            <p className={fontStyles.hyundai_body1_18}>hyundai_body1_18 - 18px</p>
            <p className={fontStyles.hyundai_body2_14}>hyundai_body2_14 - 14px</p>
        </>
    );
}

export default App;
