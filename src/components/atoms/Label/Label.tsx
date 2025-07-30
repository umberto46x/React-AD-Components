import type { ReactElement } from "react";
import styles from "./Label.module.scss";

type LabelProps = {
  htmlFor: string;
  children?: ReactElement;
  textualContent?: string;
};

export const Label = ({ children, htmlFor, textualContent }: LabelProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className={styles.label}>
        {textualContent}
        {children}
      </label>
    </>
  );
};
