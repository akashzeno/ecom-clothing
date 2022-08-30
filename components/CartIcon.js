import Image from "next/image.js";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cart/cart_selectors.js";
import styles from "../styles/CartIcon.module.css";

export default function CartIcon() {
	const cartCount = useSelector(selectCartCount);
	return (
		<div className={styles.cartIconContainer}>
			<Image
				className={styles.cartIcon}
				src="/shopping-bag.svg"
				width={24}
				height={24}
				alt="Cart Icon"
			/>
			<span className={styles.itemCount}>{cartCount}</span>
		</div>
	);
}
