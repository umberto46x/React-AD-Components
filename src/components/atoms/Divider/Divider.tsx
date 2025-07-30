import styles from "./Divider.module.scss";

type DividerProps = {
  vertical?: boolean;
};

export const Divider = ({ vertical = false }: DividerProps) => (
  <div className={vertical ? styles.vertical : styles.horizontal}></div>
);
