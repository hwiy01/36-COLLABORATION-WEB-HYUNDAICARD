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
        <Chip mode="filter" content="온라인 쇼핑" />
        <Chip mode="filter" content="온라인 쇼핑" />
      </section>
    </div>
  );
};

export default Accordion;
