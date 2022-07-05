import Image from "next/image.js";
import { useContext } from "react";
import { CartContext } from "../context/cartContext.js";
import styles from "../styles/ProductCard.module.css";
import Button from "./Button.js";

export default function ProductCard({ product }) {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);
	const addProductToCart = () => addItemToCart(product);
	return (
		<div className={styles.productCardContainer}>
			<Image src={imageUrl} alt={name} width={450} height={500} />
			<div className={styles.footer}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add To Cart
			</Button>
		</div>
	);
}
