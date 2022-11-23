import Link from "next/link";
import styles from "../styles/CartDropdown.module.css";
import Button from "./Button.js";
import CartItem from "./CartItem.js";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../store/cart/cart_selectors.js";
import { toggleCartDropdown } from "../store/cart/cart_actions.js";

export default function CartDropdown() {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const toggleCartDropdownHandler = () => dispatch(toggleCartDropdown());
	return (
		<div className={styles.cartDropdownContainer}>
			<div className={styles.cartItems}>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
				) : (
					<span>Your Cart Is Empty!</span>
				)}
			</div>
			<Link href="/checkout" className={styles.cartCheckout}>
				<Button onClick={toggleCartDropdownHandler}>CHECKOUT</Button>
			</Link>
		</div>
	);
}
