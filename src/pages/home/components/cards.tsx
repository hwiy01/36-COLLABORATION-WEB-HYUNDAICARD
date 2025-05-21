import Card from "@/shared/components/card/card";
import * as styles from "./post.css";
import { useGetCards } from "../hooks/get-cards";

const Cards = () => {
  const { data } = useGetCards();

  return <div className={styles.postContainer}></div>;
};

export default Cards;
