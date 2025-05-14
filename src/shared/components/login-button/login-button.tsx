import type { ReactNode } from "react";
import * as styles from "./login-button.css";

interface Props {
  color: "whiteGray" | "blackGray" | "whiteOutline";
  size: "small" | "medium" | "large";
  children: ReactNode;
  onClick?: () => void;
}

const LoginButton = ({
  color = "blackGray",
  size = "medium",
  children,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.buttonBase} ${styles.colorVariants[color]} ${styles.sizeVariants[size]}`}
      type="button"
    >
      <p>{children}</p>
    </button>
  );
};

export default LoginButton;
