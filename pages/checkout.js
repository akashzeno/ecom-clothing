import CheckoutItem from "../components/CheckoutItem.js";
import styles from "../styles/checkout.module.css";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../store/cart/cart_selectors.js";
import PaymentForm from "../components/PaymentForm.js";

export default function Checkout() {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	return (
		<div className={styles.checkoutContainer}>
			<div className={styles.checkoutHeader}>
				<div className={styles.headerBlock}>
					<span>Product</span>
				</div>
				<div className={styles.headerBlock}>
					<span>Description</span>
				</div>
				<div className={styles.headerBlock}>
					<span>Quantity</span>
				</div>
				<div className={styles.headerBlock}>
					<span>Price</span>
				</div>
				<div className={styles.headerBlock}>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} checkoutItem={item} />
			))}
			<span className={styles.total}>Total: ${cartTotal}</span>
			<PaymentForm />
		</div>
	);
}
