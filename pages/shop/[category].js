import { useRouter } from "next/router.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard.js";
import { setCategories } from "../../store/categories/categories_actions.js";
import { selectCategories } from "../../store/categories/categories_selectors.js";
import styles from "../../styles/shop.module.css";
import { getCollectionAndDocuments } from "../../utils/firebase.js";

export default function Category() {
	const { category } = useRouter().query;
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			dispatch(setCategories(await getCollectionAndDocuments("categories")));
		})();
	}, []);
	const categories = useSelector(selectCategories);
	return (
		<>
			<h1 className={styles.categoryTitle}>{category?.toUpperCase()}</h1>
			<div className={styles.productsContainer}>
				{categories[category]?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
}
