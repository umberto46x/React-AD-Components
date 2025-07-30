import type { ChangeEvent } from "react";
import styles from "./Textarea.module.scss";

type TextareaProps = {
  id?: string;
  name: string;
  rows?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({
  name,
  rows = 4,
  onChange,
  placeholder,
  value,
  id,
}: TextareaProps) => {
  return (
    <>
      <textarea
        className={styles.textarea}
        name={name}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        value={value}
      ></textarea>
    </>
  );
};
