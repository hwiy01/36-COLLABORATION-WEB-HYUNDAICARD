import React from "react";
import * as styles from "./carousel.css.ts";

interface ImageItem {
  id: number;
  order: number;
  src: string;
  width: "half" | "quarter";
  alt?: string;
}

interface CarouselImageContainerProps {
  imageList: ImageItem[];
}

export const CarouselImageContainer: React.FC<CarouselImageContainerProps> = ({
  imageList,
}) => {
  const sortedImages = imageList.sort(
    (a: ImageItem, b: ImageItem) => a.order - b.order,
  );

  return (
    <div className={styles.container}>
      {sortedImages.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
          className={[
            img.width === "half" && styles.halfImage,
            img.width === "quarter" && styles.quarterImage,
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
};
