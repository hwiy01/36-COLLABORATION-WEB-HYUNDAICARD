export interface Tag {
  id: string;
  name: string;
  isSelected: boolean;
}

export interface TagCategory {
  category: string;
  tags: Tag[];
}

export const initialTagCategories: TagCategory[] = [
  {
    category: "쇼핑/소비",
    tags: [
      { id: "shopping-1", name: "온라인 쇼핑", isSelected: false },
      { id: "shopping-2", name: "온라인 페이", isSelected: false },
      { id: "shopping-3", name: "크레딧", isSelected: false },
      { id: "shopping-4", name: "바우처", isSelected: false },
      { id: "shopping-5", name: "어디서나 적립/할인", isSelected: false },
      { id: "shopping-6", name: "오프라인 쇼핑", isSelected: false },
      { id: "shopping-7", name: "디지털 콘텐츠", isSelected: false },
      { id: "shopping-8", name: "배달 앱", isSelected: false },
    ],
  },
  {
    category: "여행/글로벌",
    tags: [
      { id: "travel-1", name: "여행", isSelected: false },
      { id: "travel-2", name: "해외", isSelected: false },
      { id: "travel-3", name: "마일리지/공항라운지", isSelected: false },
      { id: "travel-4", name: "특급호텔/발레파킹", isSelected: false },
    ],
  },
  {
    category: "이동/교통",
    tags: [
      { id: "transport-1", name: "차량 관리", isSelected: false },
      { id: "transport-2", name: "주유", isSelected: false },
      { id: "transport-3", name: "이동수단", isSelected: false },
    ],
  },
  {
    category: "생활/편의",
    tags: [
      { id: "life-1", name: "커피", isSelected: false },
      { id: "life-2", name: "생활 서비스", isSelected: false },
      { id: "life-3", name: "멤버십 혜택", isSelected: false },
    ],
  },
  {
    category: "금융/사업",
    tags: [
      { id: "finance-1", name: "금융", isSelected: false },
      { id: "finance-2", name: "렌탈", isSelected: false },
      { id: "finance-3", name: "개인사업자", isSelected: false },
    ],
  },
];
