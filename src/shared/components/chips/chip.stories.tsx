import Chip from "@/shared/components/chips/chip";
import "../../../styles/global.css";

const meta = {
  title: "Components/chip", // 스토리북에서 표시될 경로와 이름
  component: Chip, // 스토리를 보여줄 컴포넌트
  parameters: {
    layout: "centered", // 중앙 정렬 레이아웃 사용
  },
  tags: ["autodocs"], // 자동 문서화 활성화
  // props에 대한 설명과 기본값, 제약 조건 등을 정의
  argTypes: {},
};

export default meta;

export const A = {};
