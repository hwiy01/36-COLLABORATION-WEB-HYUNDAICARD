# 🚀 36-COLLABORATION-WEB-HYUNDAICARD

AT SOPT 36기 합동 세미나 - 현대카드 프로젝트

![장표0](https://github.com/user-attachments/assets/24d7d240-8b36-4b16-bc22-606e00695c9d)
![장표1](https://github.com/user-attachments/assets/b6f5c80e-077e-42b0-b406-811dfc1a36eb)
![장표2](https://github.com/user-attachments/assets/ebbb1267-0418-4bbb-a234-34cabad6cafd)


---
## 👨‍💻 WEB Developers

| 이름     | GitHub 링크     |
|----------|-----------------|
| 곽지욱   | [곽지욱](https://github.com/gwagjiug) |
| 고제성   | [고제성](https://github.com/kojesung) |
| 김정민   | [김정민](https://github.com/jjangminii) |
| 황인영   | [황인영](https://github.com/hwiy01) |

---

## 🔧 역할 분담

### 곽지욱
- 프로젝트 초기 세팅
- 스토리북 세팅
- 라우터 초기 세팅
- Axios 기본 설정
- Open API 스펙 세팅
- 헤더 & 푸터 컴포넌트 퍼블리싱
- 헤더 컴포넌트 동작 구현
- Subheader 구현
- 내게 맞는 카드 찾기 사이드바 구현
- 내게 맞는 카드 찾기 - Lottie 추가
- 홈페이지 사이드바 퍼블리싱
- 이벤트 카드 퍼블리싱
- Post API 연동 및 이벤트 카드 퍼블리싱

### 고제성
- SVGR, Path, Alias 세팅
- Axios 기본 설정
- Card 공통 컴포넌트 제작
- TextButton 공통 컴포넌트 제작
- 내게 맞는 카드 찾기 - 플로팅 카드 컴포넌트 제작
- Chip 컴포넌트 구현
- Accordion 컴포넌트
- 내게 맞는 카드 찾기 사이드바 구현
- Chip 호버 시 플로팅 메시지 렌더링
- 내게 맞는 카드 찾기 - Lottie 추가
- 내게 맞는 카드 찾기 사이드바 api 연동
- 내게 맞는 카드 찾기 메인 화면 api 연동

### 김정민
- Design Token 세팅
- 스토리북 세팅
- Login Button 공통 컴포넌트
- Progress Bar 컴포넌트
- 드롭다운 기능 제작
- 다른 카드 추천 컴포넌트
- Main Event 컴포넌트 구현
- Find Card 인터랙션
- Find Card 상단부 퍼블리싱
- 홈 퍼블리싱
- Home Card API 연동 및 퍼블리싱

### 황인영
- TanStack Query 초기 세팅
- 캐러셀 공통 컴포넌트 구현
- 드롭다운 컴포넌트 구현
- Subheader 구현
- 홈페이지 사이드바 퍼블리싱
- 캐러셀 홈 화면 퍼블리싱
- 내게 맞는 카드 찾기 메인 페이지 퍼블리싱

---

## 🛠️ Tech Stack

- **Languages/Tools**: TypeScript, Vite, pnpm  
- **Styling**: Vanilla Extract  
- **Documentation**: Storybook  
- **Formatting & Linting**: Biome  

---

## 🧭 Convention Guide

### 📁 컴포넌트
- Interface 네이밍: `Props` 접미사 사용 → `CardProps`, `ChipProps`
- 불필요한 `<div>` 대신 Fragment 사용
- `children` 불필요 시 self-closing 태그 사용 → `<Component />`

### 🗂 폴더 구조
- 폴더명: 소문자 시작 + `s` 접미사 + 케밥케이스 → `components`, `hooks`

### 🔡 타입
- `interface`와 `type` 구분 명확히 사용

### 🧮 변수
- `var` 금지, `const → let` 순서로 선언
- 문자열 조합: 백틱(``` `` ```) 사용
- 상수는 대문자 + 스네이크케이스 → `API_KEY`
- 불리언 변수: `is` 접두사 사용 → `isActive`
- 리스트 `key`값: 고유값 사용, `index` 지양

### 🧠 함수
- 명확한 기능 중심 네이밍 (동사+명사)
  - `get`, `create`, `check` 등 역할 반영
- 이벤트 핸들러: `handle` 접두사 → `handleSubmitClick`
- 유틸 함수: 반환값 기반 네이밍, 도메인 2곳 이상 사용 시 `utils`로 분리
- **항상 화살표 함수 사용**
- API 호출 함수는 `use` 접두사 → `useLoginMutation`

### 💡 기타 규칙
- 배열 복사 시 스프레드 연산자 `...`
- `for` 대신 `map`, `forEach`
- 구조분해 할당 적극 활용

### 🎨 스타일 가이드
- 시맨틱 태그 사용
- 불필요한 `<div>` 최소화
- 레이아웃용 Wrapper는 `container`로 명명

---

