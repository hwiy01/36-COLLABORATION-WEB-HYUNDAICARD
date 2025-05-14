import { IconApplepay, SvgHyundaiLogo } from "src/assets/svg";
import * as styles from "./header.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeftContainer}>
        <SvgHyundaiLogo width={"15.5rem"} height={"4.3rem"} />
        <div className={styles.leftItemContainer}>
          <p>Account</p>
          <p>Account</p>
          <p>Account</p>
          <p>Account</p>
          <p>Account</p>
          <IconApplepay />
        </div>
      </div>
      <div className={styles.headerRightContainer}>
        <p>법인</p>
        <p>법인</p>
        <p>법인</p>
        <p>법인</p>
      </div>
    </header>
  );
};

export default Header;
