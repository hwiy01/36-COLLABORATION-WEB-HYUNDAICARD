import SvgFooterWeb1 from "src/assets/svg/FooterWeb1";
import ContactList from "./contact-list";
import * as styles from "./footer.css";
import LegalList from "./legal-list";
import LinkList from "./link-list";
import SvgFooterWeb2 from "src/assets/svg/FooterWeb2";

const Footer = () => {
  return (
    <footer className={styles.footerRoot}>
      <div className={styles.footerSectionList}>
        <div className={styles.footerSection}>
          <div className={styles.contactInfoGroup({ gap: "sm" })}>
            <ContactList textLength={1} />
            <p className={styles.supportNoticeText}>
              외국인(Foreigner) 청각장애인을 위한 상담 안내 서비스를 제공합니다.
            </p>
          </div>
          <div className={styles.contactInfoGroup({ gap: "md" })}>
            <ContactList textLength={6} />
          </div>
        </div>
      </div>
      <ul className={styles.linkListContainer}>
        <LinkList />
      </ul>
      <div className={styles.legalListContainer}>
        <ul className={styles.legalCategoryContainer}>
          <LegalList listType="category" />
        </ul>
        <ul>
          <LegalList listType="company" />
        </ul>
        <div className={styles.legalImageContainer}>
          <SvgFooterWeb1 width={"5.6rem"} height={"4rem"} />
          <SvgFooterWeb2 width={"8rem"} height={"3.5rem"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
