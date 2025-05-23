import MainEvent from "@/shared/components/main-event/main-event";
import * as styles from "./post.css";
import type { components } from "@/shared/types/api";

type Post = components["schemas"]["PostResponseDto"];

interface PostsProps {
  postsData: Post[];
}

const Posts = ({ postsData }: PostsProps) => {
  return (
    <div className={styles.postContainer}>
      {postsData.map((post) => (
        <MainEvent
          key={post.imageUrl}
          cardIconUrl={post.imageUrl}
          textContent={post.title}
          cardName={post.title}
        />
      ))}
    </div>
  );
};

export default Posts;
