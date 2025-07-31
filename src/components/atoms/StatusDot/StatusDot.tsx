import styles from "./StatusDot.module.scss";

interface StatusDotProps {
  status: "online" | "offline" | "busy" | "away";
}

export const StatusDot = ({ status }: StatusDotProps) => {
  return <span className={`${styles["status-dot"]} ${styles[status]}`} />;
};
