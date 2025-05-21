import {
  type TagCategory,
  initialTagCategories,
} from "@/shared/mocks/mock-tags";
import { useState } from "react";
import Accordion from "./components/accordion/accordion";

const My = () => {
  const [tags, setTags] = useState<TagCategory[]>(initialTagCategories);
  // api 연동할 때 response -> Tag type으로 convert 해줘야함!
  return (
    <div style={{ width: "26.6rem" }}>
      {tags.map((item) => (
        <Accordion key={item.category} title={item.category} />
      ))}
    </div>
  );
};

export default My;
