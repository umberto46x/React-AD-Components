import type { ReactNode } from "react";
import styles from "./HelperText.module.scss";

type Props = {
  children: ReactNode;
  variant?: "error" | "info";
};

export const HelperText = ({ children, variant = "info" }: Props) => {
  return <p className={styles[variant]}>{children}</p>;
};
