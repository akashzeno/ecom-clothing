import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesStart } from "../store/categories/categories_actions.js";
import {
	selectCategories,
	selectCategoriesIsLoading,
} from "../store/categories/categories_selectors.js";
import { Fragment, useEffect } from "react";
import Link from "next/link.js";
import ProductCard from "../components/ProductCard.js";
import styles from "../styles/shop.module.css";
import Spinner from "../components/Spinner.js";

export default function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, []);
	const categories = useSelector(selectCategories);
	const isLoading = useSelector(selectCategoriesIsLoading);
	return isLoading ? (
		<Spinner />
	) : (
		Object.keys(categories).map((title) => (
			<Fragment key={title}>
				<Link href={`/shop/${title}`}>
					<h2 className={styles.categoryTitle}>{title.toUpperCase()}</h2>
				</Link>
				<div className={styles.productsContainer}>
					{categories[title].map((product, index) => {
						if (index <= 3) {
							return <ProductCard key={product.id} product={product} />;
						}
					})}
				</div>
			</Fragment>
		))
	);
}
