import styles from "./RadioGroup.module.scss";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
  label?: string;
}

export const RadioGroup = ({
  name,
  options,
  selectedValue,
  onChange,
  label,
}: RadioGroupProps) => {
  return (
    <div className={styles.radioGroup}>
      {label && <span className={styles.groupLabel}>{label}</span>}
      {options.map((option) => (
        <label key={option.value} className={styles.radioLabel}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.radioInput}
          />
          <span className={styles.customRadio} />
          {option.label}
        </label>
      ))}
    </div>
  );
};
