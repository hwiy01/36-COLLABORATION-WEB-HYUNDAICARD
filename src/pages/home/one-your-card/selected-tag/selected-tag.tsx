import * as styles from "./selected-tag.css";
import Chip from "@/shared/components/chips/chip";

interface SelectedTagProps {
  tags: string[];
  onRemove: (label: string) => void;
}

const SelectedTag = ({ tags, onRemove }: SelectedTagProps) => {
  const isOverLimit = tags.length >= 6;

  return (
    <div className={styles.selectedContainer}>
      <div className={styles.labelRow}>
        <p className={styles.label}>내가 선택한 혜택</p>
        <p className={isOverLimit ? styles.limitRed : styles.limitGray}>
          {isOverLimit ? "최대 6개까지 선택 가능합니다." : "최대 6개 선택"}
        </p>
      </div>

      <div className={styles.tagGrid}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            mode="input"
            content={tag}
            handleClickCloseBtn={() => onRemove(tag)} // ✅ Chip에서 요구하는 props
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedTag;
