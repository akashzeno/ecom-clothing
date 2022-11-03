import Image from "next/image.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	removeItemFromCart,
	setCartItemQuantity,
} from "../store/cart/cart_actions.js";
import { selectCartItems } from "../store/cart/cart_selectors.js";
import styles from "../styles/CheckoutItem.module.css";

export default function CheckoutItem({ checkoutItem }) {
	const { name, price, quantity, imageUrl } = checkoutItem;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const changeProductItemQuantity = (event) =>
		dispatch(
			setCartItemQuantity(checkoutItem, parseInt(event.target.value), cartItems)
		);
	const removeProductFromCart = () =>
		dispatch(removeItemFromCart(checkoutItem, cartItems));
	return (
		<div className={styles.checkoutItemContainer}>
			<div className={styles.imageContainer}>
				<Image src={imageUrl} width="150" height="150" alt={name} />
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
