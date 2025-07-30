import styles from "./Image.module.scss";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  rounded?: boolean;
};

export const Image = ({
  src,
  alt,
  className = "",
  rounded = false,
}: ImageProps) => (
  <img
    src={src}
    alt={alt}
    className={`${styles.image} ${rounded ? styles.rounded : ""} ${className}`}
  />
);
