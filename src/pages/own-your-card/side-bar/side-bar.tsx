import SvgIconInitialization from "src/assets/svg/IconInitialization";
import {
  resetBtnStyle,
  resetBtnText,
  sideBarContainer,
  sideBarHeader,
  sideBarHeaderTitle,
} from "./side-bar.css";

const SideBar = () => {
  return (
    <aside className={sideBarContainer}>
      <section className={sideBarHeader}>
        <p className={sideBarHeaderTitle}>내게맞는카드찾기</p>
        <button className={resetBtnStyle} type="button">
          <div>
            <SvgIconInitialization width={"1.6rem"} height={"1.6rem"} />
          </div>
          <p className={resetBtnText}>초기화</p>
        </button>
      </section>
    </aside>
  );
};

export default SideBar;
