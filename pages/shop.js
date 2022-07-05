import { useContext } from "react";
import ProductCard from "../components/ProductCard.js";
import { ProductsContext } from "../context/productsContext.js";
import styles from "../styles/shop.module.css";

export default function Shop() {
	const { products } = useContext(ProductsContext);

	return (
		<div className={styles.productsContainer}>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
