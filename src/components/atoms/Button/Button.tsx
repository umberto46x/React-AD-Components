import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  textualContent?: string;
  onClick?: () => void;
  fullWidth?: boolean;
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
  textualContent,
  type = "button",
  fullWidth = false,
}: ButtonProps) => {
  const buttonClass = classNames(styles.button, styles[`button--${variant}`], {
    [styles["button--full"]]: fullWidth,
  });
  return (
    <>
      <button className={buttonClass} onClick={onClick} type={type}>
        {textualContent}
        {children}
      </button>
    </>
  );
};
