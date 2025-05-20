import Header from "./header/header";
import * as styles from "./one-your-card-container.css";
import OwnYourCard from "src/shared/components/own-your-card/own-your-card";

const OneYourCardContainer = () => {
  const handleCardClick = () => {
    console.log("내게 맞는 카드 확인하기 클릭됨");
    //라우팅 처리 + 선택 칩 컴포넌트 전송
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Header />
        {/* 이곳에 드롭다운, 선택된 태그 등도 추가 */}
      </div>

      {/* 현대카드 카드 컴포넌트 (오른쪽) */}
      <OwnYourCard onClick={handleCardClick} showText={true} />
    </div>
  );
};

export default OneYourCardContainer;
