import type { ChangeEvent } from "react";
import styles from "./Select.module.scss";

type SelectProps = {
  name: string;
  options: { value: string; label: string }[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

export const Select = ({ name, options, onChange, value }: SelectProps) => (
  <select
    className={styles.select}
    name={name}
    onChange={onChange}
    value={value}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);
