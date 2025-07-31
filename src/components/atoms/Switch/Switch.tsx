import styles from "./Switch.module.scss";

type SwitchProps = {
  checked?: boolean;
  onChange: () => void;
};

export const Switch = ({ checked, onChange }: SwitchProps) => (
  <label className={styles.switch}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className={styles.slider}></span>
  </label>
);
