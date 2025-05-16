import * as styles from "./footer.css";

const Footer = () => {
  return (
    <footer className={styles.footerRoot}>
      <ul className={styles.footerSectionList}>
        <div className={styles.footerSection}>
          <li className={styles.contactInfoGroup}>
            <div className={styles.contactInfoRow}>
              <p className={styles.contactTextStyle({ variant: "label" })}>
                고객센터
              </p>
              <p className={styles.contactTextStyle({ variant: "value" })}>
                1588-1234
              </p>
            </div>
            <p className={styles.supportNoticeText}>
              외국인(Foreigner) 청각장애인을 위한 상담 안내 서비스를 제공합니다.
            </p>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
