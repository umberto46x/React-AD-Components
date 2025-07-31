import styles from "./Avatar.module.scss";
import classNames from "classnames";

type AvatarProps = {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  fallbackText?: string;
};

export const Avatar = ({
  src,
  alt,
  size = "md",
  fallbackText,
}: AvatarProps) => {
  return src ? (
    <img
      className={classNames(styles.avatar, styles[size])}
      src={src}
      alt={alt}
    />
  ) : (
    <div className={classNames(styles.avatar, styles[size], styles.fallback)}>
      {fallbackText?.[0].toUpperCase() || "?"}
    </div>
  );
};
