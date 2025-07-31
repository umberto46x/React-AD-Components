import styles from "./InputField.module.scss";

interface InputFieldProps {
  label: string;
  type?: string;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
