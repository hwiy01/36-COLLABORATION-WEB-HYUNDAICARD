import type { ReactNode } from "react";
import { button } from "./login-button.css";

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
    <button onClick={onClick} className={button({ color, size })} type="button">
      {children}
    </button>
  );
};

export default LoginButton;
