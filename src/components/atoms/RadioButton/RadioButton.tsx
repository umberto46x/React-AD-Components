import React from "react";
import styles from "./RadioButton.module.scss";

type RadioButtonProps = {
  name: string;
  id: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = ({
  name,
  id,
  label,
  value,
  checked,
  onChange,
}: RadioButtonProps) => (
  <div className={styles.radio}>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);
