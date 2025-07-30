import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  content: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  content,
}: ButtonProps) => {
  return (
    <>
      <button
        className={classNames(styles.button, styles[variant])}
        onClick={onClick}
      >
        {content}
        {children}
      </button>
    </>
  );
};
