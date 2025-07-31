import type { ReactNode } from "react";
import styles from "./Tooltip.module.scss";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

export const Tooltip = ({ text, children }: TooltipProps) => (
  <span className={styles.tooltip}>
    {children}
    <span className={styles.tooltipText}>{text}</span>
  </span>
);
