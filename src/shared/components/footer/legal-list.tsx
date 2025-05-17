import * as styles from "./legal-list.css";

export const LEGAL_CATEGORY_LIST = [
  { content: "개인", fontStyle: "bold" },
  { content: "법인", fontStyle: "bold" },
  { content: "가맹점", fontStyle: "bold" },
] as const;

export const LEGAL_COMPANY_INFO = [
  {
    content:
      "서울시 영등포구 의사당대로 3 현대카드빌딩 1관\n사업자 등록번호 213-86-15419\nⓒ Hyundai Card Co., Ltd",
    fontStyle: "medium",
  },
] as const;

interface LegalListProps {
  listType: "category" | "company";
}

const LegalList = ({ listType }: LegalListProps) => {
  const data =
    listType === "category" ? LEGAL_CATEGORY_LIST : LEGAL_COMPANY_INFO;

  return (
    <>
      {data.map((item) => (
        <p
          key={item.content}
          className={styles.legalContent({ fontstyle: item.fontStyle })}
        >
          {item.content}
        </p>
      ))}
    </>
  );
};

export default LegalList;
