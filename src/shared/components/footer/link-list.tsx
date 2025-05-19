import * as styles from "./link-list.css";

export const FOOTER_LINK_LIST = [
  { content: "회사소개", fontStyle: "bold" },
  { content: "회사소개(한글·ENG)", fontStyle: "medium" },
  { content: "영업점 안내", fontStyle: "medium" },
  { content: "개인정보 처리방침", fontStyle: "medium" },
  { content: "고객권리안내", fontStyle: "medium" },
  { content: "이용약관", fontStyle: "medium" },
  { content: "윤리경영", fontStyle: "medium" },
  { content: "업무위탁현황", fontStyle: "medium" },
  { content: "인재모집", fontStyle: "medium" },
  { content: "현대카드 SNS·패밀리", fontStyle: "medium" },
] as const;

const LinkList = () => {
  return (
    <>
      {FOOTER_LINK_LIST.map(({ content, fontStyle }) => (
        <p
          key={content}
          className={styles.linkContent({ fontstyle: fontStyle })}
        >
          {content}
        </p>
      ))}
    </>
  );
};

export default LinkList;
