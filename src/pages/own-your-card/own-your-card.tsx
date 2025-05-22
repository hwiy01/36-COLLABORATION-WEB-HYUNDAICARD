import { useTagFilter } from "../my/hooks/tag-filter";
import { pageConatiner } from "./own-your-card.css";
import SideBar from "./side-bar/side-bar";

const OwnYourCard = () => {
  const { tags, toggleTag, resetTagSelected } = useTagFilter();

  return (
    <div className={pageConatiner}>
      <SideBar
        tags={tags}
        toggleTag={toggleTag}
        resetTag={resetTagSelected}
      ></SideBar>
    </div>
  );
};

export default OwnYourCard;
