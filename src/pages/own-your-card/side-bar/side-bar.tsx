import Accordion from "@/pages/my/components/accordion/accordion";
import RangeSlider from "@/pages/my/components/range-slider/range-slider";
import type { TagCategoryGroupWithIsSelected } from "@/pages/my/hooks/tag-filter";
import SvgIconInitialization from "src/assets/svg/IconInitialization";
import {
  annualFeeContainer,
  annualFeeHeader,
  annualFeeTitle,
  resetBtnStyle,
  resetBtnText,
  sideBarContainer,
  sideBarHeader,
  sideBarHeaderTitle,
} from "./side-bar.css";

interface sideBarProps {
  tags: TagCategoryGroupWithIsSelected[];
  toggleTag: (categoryIndex: number, tagId: string) => void;
  resetTag: () => void;
}

const SideBar = ({ tags, toggleTag, resetTag }: sideBarProps) => {
  return (
    <aside className={sideBarContainer}>
      <section className={sideBarHeader}>
        <p className={sideBarHeaderTitle}>내게 맞는 카드찾기</p>
        <button className={resetBtnStyle} type="button" onClick={resetTag}>
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
      <section className={annualFeeContainer}>
        <section className={annualFeeHeader}>
          <p className={annualFeeTitle}>연회비 구간</p>
        </section>
        <section>
          <RangeSlider range={["0", "1", "3", "5", "10", "10~"]} />
        </section>
      </section>
    </aside>
  );
};

export default SideBar;
