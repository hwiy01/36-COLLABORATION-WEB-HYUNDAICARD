import Chip from "@/shared/components/chips/chip";
import ChipHover from "@/shared/components/chips/chip-hover/chip-hover";
import {} from "@/shared/components/chips/chip.css";
import { useAccordion } from "@/shared/hooks/use-accordion";
import { useState } from "react";
import { IconArrowUp } from "src/assets/svg";
import SvgIconArrowDown from "src/assets/svg/IconArrowDown";
import type { TagWithIsSelected } from "../../hooks/tag-filter";
import {
  accordionContainer,
  accordionHeader,
  chipContainer,
  chipHoverContainer,
  headerTitle,
  tagsContainer,
  tagsContainerClosed,
  tagsContainerOpen,
} from "./accordion.css";

interface accordionProps {
  title: string;
  tags: TagWithIsSelected[];
  onTagClick: (tagId: string) => void;
}

const Accordion = ({ title, tags, onTagClick }: accordionProps) => {
  const { isOpen, toggle } = useAccordion(true);
  const [hoveredTagId, setHoveredTagId] = useState<string | null>(null);

  return (
    <div className={accordionContainer}>
      <button className={accordionHeader} onClick={toggle} type="button">
        <h3 className={headerTitle}>{title}</h3>
        {isOpen ? (
          <SvgIconArrowDown
            width={"3.2rem"}
            height={"3.2rem"}
            stroke={"#363030"}
          />
        ) : (
          <IconArrowUp width={"3.2rem"} height={"3.2rem"} stroke={"#363030"} />
        )}
      </button>
      <section
        className={`${tagsContainer} ${
          isOpen ? tagsContainerOpen : tagsContainerClosed
        }`}
      >
        {!tags && null}
        {tags?.map((tag) => (
          <div
            key={tag.tagId}
            onMouseEnter={() => setHoveredTagId(tag.tagId ?? "")}
            onMouseLeave={() => setHoveredTagId(null)}
            className={chipContainer}
          >
            <Chip
              mode={tag.isSelected ? "selected" : "filter"}
              content={tag.name ?? ""}
              handleClickFilter={() => {
                onTagClick(tag.tagId ?? "");
              }}
            />
            {hoveredTagId === tag.tagId && (
              <div className={chipHoverContainer}>
                <ChipHover>{tag.hoverText}</ChipHover>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Accordion;
