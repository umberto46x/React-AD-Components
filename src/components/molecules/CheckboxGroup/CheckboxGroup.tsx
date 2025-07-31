import styles from "./CheckBoxGroup.module.scss";

interface Option {
  label: string;
  value: string;
}

interface CheckBoxGroupProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label?: string;
  error?: string;
}

export const CheckboxGroup = ({
  options,
  selected,
  onChange,
  label,
  error,
}: CheckBoxGroupProps) => {
  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className={styles.group}>
      {label && <p className={styles.groupLabel}>{label}</p>}
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} className={styles.option}>
            <input
              type="checkbox"
              value={option.value}
              checked={selected.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
