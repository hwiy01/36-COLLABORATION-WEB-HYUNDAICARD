import MainEvent from "@/shared/components/main-event/main-event";
import * as styles from "./post.css";
import { useGetPosts } from "../hooks/get-posts";

const Posts = () => {
  const { data } = useGetPosts();

  return (
    <div className={styles.postContainer}>
      {data.map((post, idx) => (
        <MainEvent
          key={idx}
          cardIconUrl={post?.imageUrl}
          textContent={post?.title}
          cardName={post?.title}
        />
      ))}
    </div>
  );
};

export default Posts;
