import { useState } from "react";
import * as styles from "./own-your-card-container.css";
import Header from "./header";
import OwnYourCard from "src/shared/components/own-your-card/own-your-card";
import { Dropdown } from "src/shared/components/dropdown/dropdown";
import { dropdownOptions } from "../constants/dropdown-options";
import SelectedTag from "./selected-tag";
import { useNavigate } from "react-router-dom";

const OneYourCardContainer = () => {
  const navigate = useNavigate();

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCardClick = () => {
    if (selectedValues.length === 0) {
      return;
    }

    const allItems = dropdownOptions.flatMap((opt) => opt.items);

    const labelValues = selectedValues
      .map((val) => allItems.find((item) => item.value === val)?.label)
      .filter((label): label is string => Boolean(label));

    const query = labelValues.join(",");
    navigate(`/my?tags=${encodeURIComponent(query)}`);
  };

  const handleSelectItem = (value: string) => {
    if (selectedValues.includes(value)) {
      return;
    }
    if (selectedValues.length >= 6) {
      return;
    }
    setSelectedValues([...selectedValues, value]);
  };

  const handleRemoveTag = (value: string) => {
    setSelectedValues(selectedValues.filter((v) => v !== value));
  };

  const allItems = dropdownOptions.flatMap((opt) => opt.items);

  const selectedTagItems = selectedValues.map((val) => {
    const label = allItems.find((item) => item.value === val)?.label || val;
    return { value: val, label };
  });

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
          <SelectedTag tags={selectedTagItems} onRemove={handleRemoveTag} />
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
