import { useTagFilter } from "../my/hooks/tag-filter";
import { pageConatiner } from "./own-your-card.css";
import SideBar from "./side-bar/side-bar";

const OwnYourCard = () => {
  const { tags, toggleTag } = useTagFilter();

  return (
    <div className={pageConatiner}>
      <SideBar tags={tags} toggleTag={toggleTag}></SideBar>
    </div>
  );
};

export default OwnYourCard;
