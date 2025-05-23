import * as styles from "./loading.css";

import loadingAnimation from "../../assets/lottie/loading.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className={styles.loadingSection}>
      <Lottie animationData={loadingAnimation} />
    </div>
  );
};

export default Loading;
