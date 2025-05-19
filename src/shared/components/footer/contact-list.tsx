import * as styles from "./contact-list.css";

type GapSize = "sm" | "md" | "lg";

export const CONTACT_INFO_LIST: {
  label: string;
  value: string;
  gapSize: GapSize;
}[] = [
  { label: "고객센터", value: "1577-6000", gapSize: "md" },
  { label: "카드신청", value: "1577-0100", gapSize: "md" },
  { label: "금융신청", value: "1577-6100", gapSize: "md" },
  { label: "도난분실신고", value: "1577-6200", gapSize: "sm" },
  { label: "점자카드신청", value: "1566-5630", gapSize: "sm" },
  { label: "해외", value: "82-2-3015-9000", gapSize: "lg" },
];

type ContactInfoRowProps = {
  textLength?: number;
};

const ContactList = ({ textLength }: ContactInfoRowProps) => {
  const slicedList = textLength
    ? CONTACT_INFO_LIST.slice(0, textLength)
    : CONTACT_INFO_LIST;

  return (
    <>
      {slicedList.map(({ label, value, gapSize }) => (
        <ul key={label} className={styles.contactInfoRow({ gap: gapSize })}>
          <li className={styles.contactTextStyle({ variant: "label" })}>
            {label}
          </li>
          <li className={styles.contactTextStyle({ variant: "value" })}>
            {value}
          </li>
        </ul>
      ))}
    </>
  );
};

export default ContactList;
