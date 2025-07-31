import type { ReactNode } from "react";
import styles from "./Badge.module.scss";
import classNames from "classnames";

type BadgeProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
};

export const Badge = ({ children, variant = "primary" }: BadgeProps) => {
  return (
    <span className={classNames(styles.badge, styles[variant])}>
      {children}
    </span>
  );
};
