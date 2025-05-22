import Accordion from "@/pages/my/components/accordion/accordion";
import type { TagCategoryGroupWithIsSelected } from "@/pages/my/hooks/tag-filter";
import SvgIconInitialization from "src/assets/svg/IconInitialization";
import {
  resetBtnStyle,
  resetBtnText,
  sideBarContainer,
  sideBarHeader,
  sideBarHeaderTitle,
} from "./side-bar.css";

interface sideBarProps {
  tags: TagCategoryGroupWithIsSelected[];
  toggleTag: (categoryIndex: number, tagId: string) => void;
}

const SideBar = ({ tags, toggleTag }: sideBarProps) => {
  return (
    <aside className={sideBarContainer}>
      <section className={sideBarHeader}>
        <p className={sideBarHeaderTitle}>내게 맞는 카드찾기</p>
        <button className={resetBtnStyle} type="button">
          <div>
            <SvgIconInitialization width={"1.6rem"} height={"1.6rem"} />
          </div>
          <p className={resetBtnText}>초기화</p>
        </button>
      </section>
      {tags.map((item, categoryIdx) => (
        <Accordion
          key={item.category}
          title={item.category ?? ""}
          tags={item.tags ?? []}
          onTagClick={(tagId: string) => toggleTag(categoryIdx, tagId)}
        />
      ))}
    </aside>
  );
};

export default SideBar;
