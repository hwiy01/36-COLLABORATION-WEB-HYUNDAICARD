import React, { useState } from "react";
import {
  IconApplepay,
  IconHamburge,
  IconSearch,
  SvgHyundaiLogo,
  VectorStroke,
} from "src/assets/svg";
import * as styles from "./header.css";
import SubContent from "./sub-content";
import { useNavigate } from "react-router-dom";
import { routePath } from "@/shared/router/path";

const MAIN_NAV_ITEMS = ["Account", "카드", "혜택", "금융", "컬처", "고객 지원"];
const UTILITY_NAV_ITEMS = ["법인", "가맹점", "소비자보호 포털", "상품공지실"];

const Header = () => {
  const navigate = useNavigate();
  const [isCardHovered, setIsCardHovered] = useState(false);
  const handleCardHover = (isHovering: boolean) => {
    setIsCardHovered(isHovering);
  };
  const handleItemClick = () => {
    navigate(routePath.MY);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeftContainer}>
          <SvgHyundaiLogo width={"15.5rem"} height={"4.3rem"} />
          <div className={styles.leftItemContainer}>
            {MAIN_NAV_ITEMS.map((item) => (
              <a
                className={styles.mainItems}
                key={item}
                onMouseEnter={
                  item === "카드" ? () => handleCardHover(true) : undefined
                }
                onMouseLeave={
                  item === "카드" ? () => handleCardHover(false) : undefined
                }
              >
                {item}
              </a>
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
      {isCardHovered && (
        <div
          onMouseEnter={() => handleCardHover(true)}
          onMouseLeave={() => handleCardHover(false)}
        >
          <SubContent onClick={handleItemClick} />
        </div>
      )}
    </>
  );
};

export default Header;
