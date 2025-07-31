import styles from "./Tag.module.scss";

type TagProps = {
  text: string;
  onRemove?: () => void;
};

export const Tag = ({ text, onRemove }: TagProps) => (
  <span className={styles.tag}>
    {text}
    {onRemove && (
      <button onClick={onRemove} className={styles.close}>
        ×
      </button>
    )}
  </span>
);
