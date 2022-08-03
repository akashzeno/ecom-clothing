import { useRouter } from "next/router.js";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard.js";
import { CategoriesContext } from "../../context/categoriesContext.js";
import styles from "../../styles/shop.module.css";

export default function Category() {
	const { category } = useRouter().query;
	const { categories } = useContext(CategoriesContext);

	return (
		<>
			<h1 className={styles.categoryTitle}>{category.toUpperCase()}</h1>
			<div className={styles.productsContainer}>
				{categories[category]?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
}
