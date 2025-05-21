import Chip from "@/shared/components/chips/chip";
import {} from "@/shared/components/chips/chip.css";
import { useAccordion } from "@/shared/hooks/accordion/use-accordion";
import { IconArrowUp } from "src/assets/svg";
import {
  accordionContainer,
  accordionHeader,
  headerTitle,
  tagsContainer,
  tagsContainerClosed,
  tagsContainerOpen,
} from "./accordion.css";

interface accordionProps {
  title: string;
}

const Accordion = ({ title }: accordionProps) => {
  const { isOpen, toggle } = useAccordion(true);
  return (
    <div className={accordionContainer}>
      <button className={accordionHeader} onClick={toggle} type="button">
        <h3 className={headerTitle}>{title}</h3>
        <IconArrowUp width={"3.2rem"} height={"3.2rem"} stroke={"#000000"} />
      </button>
      <section
        className={`${tagsContainer} ${isOpen ? tagsContainerOpen : tagsContainerClosed}`}
      >
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
