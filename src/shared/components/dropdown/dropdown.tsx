import type React from "react";
import { useEffect, useRef, useState } from "react";
import Chip from "../chips/chip";
import {
  dropdownItemStyle,
  clipPathListLength8,
  clipPathListLength4,
  clipPathListLength3,
  dropdownListBaseFrame,
  dropdownListInnerFrame,
} from "./dropdown.css";

interface DropdownListItem {
  label: string;
  value: string;
}

interface DropdownProps {
  setSelectedItem: (value: string) => void;
  content: string;
  dropdownList: DropdownListItem[];
  className?: string;
}

export const Dropdown = ({
  setSelectedItem,
  content,
  dropdownList,
  className,
}: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getClipPathClass = (length: number) => {
    if (length === 3) { return clipPathListLength3 };
    if (length === 4) { return clipPathListLength4 };
    if (length === 8) { return clipPathListLength8 };
    return "";
  };

  const handleClickItem = (item: DropdownListItem) => {
    setSelectedItem(item.value);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <Chip
        mode="dropdown"
        content={content}
        dropdownFlag={dropdownOpen}
        handleClickDropdown={() => setDropdownOpen((prev) => !prev)}
      />
        {dropdownOpen && (
          <div className={`${dropdownListBaseFrame} ${getClipPathClass(dropdownList.length)}`}>
            <ul
              className={`${dropdownListInnerFrame} ${getClipPathClass(dropdownList.length)}`}>
              {dropdownList.map((item) => (
                <li
                  key={item.value}
                  className={dropdownItemStyle}
                  onClick={() => handleClickItem(item)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}

    </div>
  );
};
