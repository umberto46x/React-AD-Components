import type { ReactNode } from "react";
import styles from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: string;
}

export const Text = ({ children, size = "md", color }: TextProps) => {
  const sizeClass = {
    sm: styles.textSm,
    md: styles.textMd,
    lg: styles.textLg,
  }[size];

  return (
    <p className={`${styles.text} ${sizeClass}`} style={{ color }}>
      {children}
    </p>
  );
};
