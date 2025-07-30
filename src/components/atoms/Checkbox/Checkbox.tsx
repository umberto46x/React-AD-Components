import type { ChangeEvent } from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  id: string;
  labelContent: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({
  id,
  labelContent,
  checked,
  onChange,
}: CheckboxProps) => (
  <div className={styles.checkbox}>
    <input type="checkbox" id={id} checked={checked} onChange={onChange} />
    <label>{labelContent}</label>
    <label htmlFor={id}></label>
  </div>
);
