import type { ReactNode } from "react";
import { button } from "./login-button.css";

interface Props {
  color: "whiteGray" | "blackGray" | "whiteOutline";
  size: "small" | "medium" | "large";
  children?: ReactNode;
  placeholder?: string;
  onClick?: () => void;
}

const LoginButton = ({
  color = "blackGray",
  size = "medium",
  children,
  onClick,
  placeholder,
}: Props) => {
  return (
    <button onClick={onClick} className={button({ color, size })} type="button">
      {children}
      {placeholder}
    </button>
  );
};

export default LoginButton;
