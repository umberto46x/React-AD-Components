import styles from "./AvatarAndName.module.scss";

interface AvatarWithNameProps {
  name: string;
  imageUrl?: string;
  size?: "small" | "medium" | "large";
}

export const AvatarAndName = ({
  name,
  imageUrl,
  size = "medium",
}: AvatarWithNameProps) => {
  return (
    <div className={`${styles.avatarContainer} ${styles[size]}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={name} className={styles.avatarImage} />
      ) : (
        <div className={styles.avatarPlaceholder}>
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      <span className={styles.avatarName}>{name}</span>
    </div>
  );
};
