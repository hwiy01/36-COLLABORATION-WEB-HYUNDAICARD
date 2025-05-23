import { bubbleBody, bubbleContainer, bubbleTail } from "./chip-hover.css";

const ChipHover = ({ children = "안녕하세요" }) => {
  return (
    <article className={bubbleContainer}>
      <div className={bubbleTail} />
      <p className={bubbleBody}>{children}</p>
    </article>
  );
};

export default ChipHover;
