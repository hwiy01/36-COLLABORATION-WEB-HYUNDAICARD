import Chip from "@/shared/components/chips/chip";
import { IconArrowUp } from "src/assets/svg";
import {
  accordionContainer,
  accordionHeader,
  headerTitle,
  tagsContainer,
} from "./accordion.css";

const Accordion = () => {
  return (
    <div className={accordionContainer}>
      <section className={accordionHeader}>
        <h3 className={headerTitle}>쇼핑/소비</h3>
        <IconArrowUp width={"3.2rem"} height={"3.2rem"} stroke={"#000000"} />
      </section>
      <section className={tagsContainer}>
        <Chip mode="filter" content="온라인 쇼핑" />
        <Chip mode="filter" content="온라인 페이" />
        <Chip mode="filter" content="크레딧" />
        <Chip mode="filter" content="바우처" />
        <Chip mode="filter" content="어디서나 적립/할인" />
        <Chip mode="filter" content="오프라인 쇼핑" />
        <Chip mode="filter" content="디지털 콘텐츠" />
        <Chip mode="filter" content="배달 앱" />
      </section>
    </div>
  );
};

export default Accordion;
