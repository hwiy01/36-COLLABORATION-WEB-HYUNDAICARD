import { TestIcon } from "./assets/svg";
import { testValue } from "@/shared/assets/test";
import { ohNO } from '@/shared/assets/asd';

function App() {
  const a = testValue;
  const ab = ohNO;
  console.log(a)
  return <><TestIcon width={900} height={900}></TestIcon></>;
}

export default App;
