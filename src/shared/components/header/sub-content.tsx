import { Line7 } from "src/assets/svg";
import * as styles from "./sub-content.css";
import LoginButton from "../login-button/login-button";

export const CARD_MENU_ITEMS = [
  "신용카드",
  "가족카드",
  "후불하이패스카드",
  "Gift카드",
  "내게 맞는 카드 찾기",
  "카드 발급 진행 조회",
] as const;

const SubContent = () => {
  return (
    <>
      <section className={styles.subContentContainer}>
        <ul className={styles.contentList}>
          <p className={styles.listTitle}>카드 신청</p>
          {CARD_MENU_ITEMS.map((item, index) => (
            <li key={index} className={styles.listItems}>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.lineContainer}>
          <Line7 width={"0.1rem"} height={"32.5rem"} />
        </div>
        <section className={styles.loginContainer}>
          <div className={styles.loginContent({ gap: "title" })}>
            자주 찾는 메뉴
            <p className={styles.loginDescription}>
              로그인하면 자주 찾는 메뉴를 확인할 수 있습니다.
            </p>
          </div>
          <div className={styles.loginButton}>
            <LoginButton color="whiteGray" size="small" placeholder="로그인" />
          </div>
        </section>
      </section>
    </>
  );
};

export default SubContent;
