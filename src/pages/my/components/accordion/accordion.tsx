import { IconArrowUp } from "src/assets/svg";
import { accordionHeader, headerTitle } from "./accordion.css";

const Accordion = () => {
  return (
    <section className={accordionHeader}>
      <h3 className={headerTitle}>쇼핑/소비</h3>
      <IconArrowUp width={"3.2rem"} height={"3.2rem"} stroke={"#000000"} />
    </section>
  );
};

export default Accordion;
