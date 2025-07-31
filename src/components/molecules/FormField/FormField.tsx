import { type ChangeEvent } from "react";
import styles from "./FormField.module.scss";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
  required?: boolean;
}

export const FormField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  required = false,
}: FormFieldProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={`${styles.input} ${error ? styles.error : ""}`}
        required={required}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
