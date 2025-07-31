import type { JSX, ReactNode } from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export const Heading = ({ level = 1, children }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const levelClass = styles[`h${level}`]; 
  return <Tag className={`${styles.heading} ${levelClass}`}>{children}</Tag>;
};
