import * as styles from "./corporate-list.css";

export const CORPORATE_INFO_LIST = [
  "업무위탁현황",
  "인재모집",
  "현대카드 SNS·패밀리·그룹사",
] as const;

const CorporateList = () => {
  return (
    <>
      {CORPORATE_INFO_LIST.map((item) => (
        <li key={item} className={styles.corporateContent}>
          {item}
        </li>
      ))}
    </>
  );
};

export default CorporateList;
