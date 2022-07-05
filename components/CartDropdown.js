import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import styles from "../styles/CartDropdown.module.css";
import Button from "./Button.js";
import CartItem from "./CartItem.js";
export default function CartDropdown() {
	const { cartItems } = useContext(CartContext);

	return (
		<div className={styles.cartDropdownContainer}>
			<div className={styles.cartItems}>
				{cartItems.map((item) => (
					<CartItem cartItem={item} key={item.id} />
				))}
			</div>
			<Button>CHECKOUT</Button>
		</div>
	);
}
