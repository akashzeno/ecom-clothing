import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import Link from "next/link";
import styles from "../styles/CartDropdown.module.css";
import Button from "./Button.js";
import CartItem from "./CartItem.js";
export default function CartDropdown() {
	const { cartItems } = useContext(CartContext);

	return (
		<div className={styles.cartDropdownContainer}>
			<div className={styles.cartItems}>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
				) : (
					<span>Your Cart Is Empty!</span>
				)}
			</div>
			<Link href="/checkout">
				<a className={styles.cartCheckout}>
					<Button>CHECKOUT</Button>
				</a>
			</Link>
		</div>
	);
}
