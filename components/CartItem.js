import Image from "next/image.js";
import styles from "../styles/CartItem.module.css";
export default function CartItem({
	cartItem: { imageUrl, name, price, quantity },
}) {
	return (
		<div className={styles.cartItemContainer}>
			<Image src={imageUrl} alt={name} width="70%" height="100%" />
			<div className={styles.itemDetails}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
}
