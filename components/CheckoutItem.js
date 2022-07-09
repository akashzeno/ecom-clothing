import Image from "next/image.js";
import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import styles from "../styles/CheckoutItem.module.css";

export default function CheckoutItem({ checkoutItem }) {
	const { name, price, quantity, imageUrl } = checkoutItem;
	const { removeItemFromCart, changeCartItemQuantity } =
		useContext(CartContext);
	const changeProductItemQuantity = (event) =>
		changeCartItemQuantity(checkoutItem, parseInt(event.target.value));
	const removeProductFromCart = () => removeItemFromCart(checkoutItem);
	return (
		<div className={styles.checkoutItemContainer}>
			<div className={styles.imageContainer}>
				<Image src={imageUrl} width={150} height={150} alt={name} />
			</div>
			<span className={styles.name}>{name}</span>
			<span className={styles.quantity}>
				<input
					className={styles.quantity}
					type="number"
					defaultValue={quantity}
					min={1}
					onChange={changeProductItemQuantity}
				/>
			</span>

			<span className={styles.price}>{price}</span>
			<button className={styles.removeButton} onClick={removeProductFromCart}>
				&#10005;
			</button>
		</div>
	);
}
