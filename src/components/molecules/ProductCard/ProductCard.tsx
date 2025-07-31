import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  actionName?: string;
  price: number;
  onProductAction?: () => void;
}

export const ProductCard = ({
  imageUrl,
  name,
  price,
  onProductAction,
  actionName = "Aggiungi al carrello",
}: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>€ {price.toFixed(2)}</p>
        {onProductAction && (
          <button className={styles.button} onClick={onProductAction}>
            {actionName}
          </button>
        )}
      </div>
    </div>
  );
};
