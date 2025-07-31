import styles from "./Alert.module.scss";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
}

export const Alert = ({ type, message }: AlertProps) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{message}</div>;
};
