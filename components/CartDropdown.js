import styles from "../styles/CartDropdown.module.css";
import Button from "./Button.js";

export default function CartDropdown() {
	return (
		<div className={styles.cartDropdownContainer}>
			<div className={styles.cartItems}></div>
			<Button>CHECKOUT</Button>
		</div>
	);
}
