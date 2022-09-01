import { useRouter } from "next/router.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard.js";
import Spinner from "../../components/Spinner.js";
import { fetchCategoriesStart } from "../../store/categories/categories_actions.js";
import {
	selectCategories,
	selectCategoriesIsLoading,
} from "../../store/categories/categories_selectors.js";
import styles from "../../styles/shop.module.css";

export default function Category() {
	const { category } = useRouter().query;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, []);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const categories = useSelector(selectCategories);
	return (
		<>
			<h1 className={styles.categoryTitle}>{category?.toUpperCase()}</h1>
			{isLoading ? (
				<Spinner />
			) : (
				<div className={styles.productsContainer}>
					{categories[category]?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</>
	);
}
