import Link from "next/link.js";
import { Fragment, useContext } from "react";
import ProductCard from "../components/ProductCard.js";
import { CategoriesContext } from "../context/categoriesContext.js";
import styles from "../styles/shop.module.css";

export default function Shop() {
	const { categories } = useContext(CategoriesContext);
	return Object.keys(categories).map((title) => (
		<Fragment key={title}>
			<Link href={`/shop/${title}`}>
				<a>
					<h2 className={styles.categoryTitle}>{title.toUpperCase()}</h2>
				</a>
			</Link>
			<div className={styles.productsContainer}>
				{categories[title].map((product, index) => {
					if (index <= 3) {
						return <ProductCard key={product.id} product={product} />;
					}
				})}
			</div>
		</Fragment>
	));
}
