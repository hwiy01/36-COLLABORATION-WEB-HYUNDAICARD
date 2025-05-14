import { sideBarContainer, sideBarHeader } from "./side-bar.css";

const SideBar = () => {
  return (
    <aside className={sideBarContainer}>
      <section className={sideBarHeader}>
        <p>내게맞는카드찾기</p>
        <button>{`초기화`}</button>
      </section>
    </aside>
  );
};

export default SideBar;
