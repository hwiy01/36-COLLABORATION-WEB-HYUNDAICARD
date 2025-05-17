import ContactInfoRow from "./contact-info-row";
import * as styles from "./footer.css";

const Footer = () => {
  return (
    <footer className={styles.footerRoot}>
      <ul className={styles.footerSectionList}>
        <div className={styles.footerSection}>
          <li className={styles.contactInfoGroup({ gap: "sm" })}>
            <ContactInfoRow textLength={1} />
            <p className={styles.supportNoticeText}>
              외국인(Foreigner) 청각장애인을 위한 상담 안내 서비스를 제공합니다.
            </p>
          </li>
          <div className={styles.contactInfoGroup({ gap: "md" })}>
            <ContactInfoRow textLength={6} />
          </div>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
