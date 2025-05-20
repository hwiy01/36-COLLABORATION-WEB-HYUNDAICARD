import { useState } from "react";
import Header from "./header/header";
import * as styles from "./one-your-card-container.css";
import OwnYourCard from "src/shared/components/own-your-card/own-your-card";
import { Dropdown } from "src/shared/components/dropdown/dropdown";
import { dropdownOptions } from "./dropdown-options";
import SelectedTag from "./selected-tag/selected-tag";

const OneYourCardContainer = () => {
  const handleCardClick = () => {
    if (selectedValues.length === 0) {
      return;
    }
    console.log("내게 맞는 카드 확인하기 클릭됨");
    console.log("선택된 값:", selectedValues);
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectItem = (value: string) => {
    if (selectedValues.includes(value)) {
      return;
    }
    setSelectedValues([...selectedValues, value]);
  };

  const handleRemoveTag = (value: string) => {
    setSelectedValues(selectedValues.filter((v) => v !== value));
  };

  const allItems = dropdownOptions.flatMap((opt) => opt.items);
  const selectedTags = selectedValues.map(
    (val) => allItems.find((item) => item.value === val)?.label || val,
  );

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Header />

        <div className={styles.dropdownContainer}>
          {dropdownOptions.map(({ category, items }) => (
            <Dropdown
              key={category}
              content={category}
              setSelectedItem={handleSelectItem}
              dropdownList={items}
            />
          ))}
        </div>
        <div className={styles.tagContainer}>
          <SelectedTag tags={selectedTags} onRemove={handleRemoveTag} />
        </div>
      </div>

      <div className={styles.right}>
        <OwnYourCard
          onClick={handleCardClick}
          showText={selectedValues.length > 0}
        />
      </div>
    </div>
  );
};

export default OneYourCardContainer;
