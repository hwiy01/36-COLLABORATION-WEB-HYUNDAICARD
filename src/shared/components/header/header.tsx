import { SubHeader } from "@/pages/my/components/card-recommendation/sub-header/sub-header";
import { routePath } from "@/shared/router/path";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconApplepay,
  IconHamburge,
  IconSearch,
  SvgHyundaiLogo,
  VectorStroke,
} from "src/assets/svg";
import * as styles from "./header.css";
import SubContent from "./sub-content";

const MAIN_NAV_ITEMS = ["Account", "카드", "혜택", "금융", "컬처", "고객 지원"];
const UTILITY_NAV_ITEMS = ["법인", "가맹점", "소비자보호 포털", "상품공지실"];

interface HeaderProps {
  location: string;
}

const Header = ({ location }: HeaderProps) => {
  const navigate = useNavigate();
  const [isCardHovered, setIsCardHovered] = useState(false);
  const handleCardHover = (isHovering: boolean) => {
    setIsCardHovered(isHovering);
  };
  const handleItemClick = (path: string) => {
    switch (path) {
      case "home":
        navigate(routePath.HOME);
        break;
      case "my":
        navigate(routePath.MY);
        break;
    }
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerLeftContainer}>
          <SvgHyundaiLogo
            width={"15.5rem"}
            height={"4.3rem"}
            onClick={() => handleItemClick("home")}
          />
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
      {location === "/my" && !isCardHovered && <SubHeader />}
      {isCardHovered && (
        <div
          onMouseEnter={() => handleCardHover(true)}
          onMouseLeave={() => handleCardHover(false)}
        >
          <SubContent onClick={() => handleItemClick("my")} />
        </div>
      )}
    </>
  );
};

export default Header;
