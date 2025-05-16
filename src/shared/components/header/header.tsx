import {
  IconApplepay,
  IconHamburge,
  IconSearch,
  SvgHyundaiLogo,
  VectorStroke,
} from "src/assets/svg";
import * as styles from "./header.css";
import React from "react";

const MAIN_NAV_ITEMS = ["Account", "카드", "혜택", "금융", "컬처", "고객 지원"];
const UTILITY_NAV_ITEMS = ["법인", "가맹점", "소비자보호 포털", "상품공지실"];

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeftContainer}>
        <SvgHyundaiLogo width={"15.5rem"} height={"4.3rem"} />
        <div className={styles.leftItemContainer}>
          {MAIN_NAV_ITEMS.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <VectorStroke width={"0.1rem"} height={"1.8rem"} />
          <IconApplepay width={"5rem"} height={"2.1rem"} />
        </div>
      </div>
      <div className={styles.headerRightContainer}>
        {UTILITY_NAV_ITEMS.map((item, index) => (
          <React.Fragment key={item}>
            <p>{item}</p>
            {index === 1 && <VectorStroke width="0.1rem" height="1.8rem" />}
          </React.Fragment>
        ))}
        <IconSearch width={"2.8rem"} height={"2.8rem"} />
        <IconHamburge width={"2.8rem"} height={"2.8rem"} />
      </div>
    </header>
  );
};

export default Header;
