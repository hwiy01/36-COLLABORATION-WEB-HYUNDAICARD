import Lottie from "lottie-react";
import spinCard from "../../../assets/lottie/hyundaicardrotate.json";
import { lottieContainer } from "./spin-card-lottie.css";

const SpinCardLottie = () => {
  return (
    <div className={lottieContainer}>
      <Lottie animationData={spinCard}></Lottie>
    </div>
  );
};

export default SpinCardLottie;
