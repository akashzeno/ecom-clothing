import Image from "next/image.js";
import styles from "../styles/CartIcon.module.css";

export default function CartIcon() {
	return (
		<div className={styles.cartIconContainer}>
			<Image
				className={styles.cartIcon}
				src="/shopping-bag.svg"
				width={24}
				height={24}
				alt="Cart Icon"
			/>
			<span className={styles.itemCount}>0</span>
		</div>
	);
}
