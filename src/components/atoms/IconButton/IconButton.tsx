import type { ReactNode } from "react";
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}

export const IconButton = ({ icon, onClick, ariaLabel }: IconButtonProps) => {
  return (
    <button
      className={styles.iconButton}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};
