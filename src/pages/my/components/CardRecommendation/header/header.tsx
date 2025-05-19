import * as styles from "./header.css";

interface HeaderProps {
  highlightText: string; // 예: "프리미엄 소비"
}

const Header = ({ highlightText }: HeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.subTitle}>
        <span className={styles.highlight}>"{highlightText}"</span>에 맞게
        추천된
      </p>
      <h1 className={styles.mainTitle}>당신에게 가장 잘 맞는 카드</h1>
    </div>
  );
};

export default Header;
