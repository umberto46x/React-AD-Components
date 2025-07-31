import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  value: number;
}

export const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarFill} style={{ width: `${value}%` }} />
    </div>
  );
};
