import SvgFooterWeb1 from "src/assets/svg/FooterWeb1";
import ContactList from "./contact-list";
import * as styles from "./footer.css";
import LegalList from "./legal-list";
import LinkList from "./link-list";
import SvgFooterWeb2 from "src/assets/svg/FooterWeb2";
import CorporateList from "./corporate-list";

interface footerProps {
  urlParameter: string;
}

const Footer = ({ urlParameter }: footerProps) => {
  const isCorporateVisible = urlParameter === "/my";

  return (
    <footer className={styles.footerRoot}>
      <section className={styles.footerSectionList}>
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
      </section>
      <ul className={styles.linkListContainer}>
        <LinkList />
      </ul>
      {isCorporateVisible && (
        <ul className={styles.corporateContainer}>
          <CorporateList />
        </ul>
      )}
      <section className={styles.legalListContainer}>
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
      </section>
    </footer>
  );
};

export default Footer;
