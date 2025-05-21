import Chip from "@/shared/components/chips/chip";
import {} from "@/shared/components/chips/chip.css";
import { useAccordion } from "@/shared/hooks/accordion/use-accordion";
import type { Tag } from "@/shared/mocks/mock-tags";
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
  tags: Tag[];
  onTagClick: (tagId: string) => void;
}

const Accordion = ({ title, tags, onTagClick }: accordionProps) => {
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
        {tags.map((tag) => (
          <Chip
            key={tag.id}
            mode={tag.isSelected ? "selected" : "filter"}
            content={tag.name}
            handleClickFilter={() => {
              onTagClick(tag.id);
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default Accordion;
