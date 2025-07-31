import { useState, useRef, useEffect } from "react";
import styles from "./DropdownMenu.module.scss";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownMenuProps {
  options: DropdownOption[];
  selected: string;
  onSelect: (value: string) => void;
  placeholder?: string;
}

export const DropdownMenu = ({
  options,
  selected,
  onSelect,
  placeholder = "Select...",
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={ref}>
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        {options.find((o) => o.value === selected)?.label || placeholder}
        {isOpen ? (
          <span className={styles.arrow}>&#9660;</span>
        ) : (
          <span className={styles.arrow}>&#9650;</span>
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.dropdownItem} ${
                selected === option.value ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
