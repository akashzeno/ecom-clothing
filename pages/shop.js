import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../store/categories/categories_actions.js";
import { selectCategories } from "../store/categories/categories_selectors.js";
import { getCollectionAndDocuments } from "../utils/firebase.js";
import { Fragment, useEffect } from "react";
import Link from "next/link.js";
import ProductCard from "../components/ProductCard.js";
import styles from "../styles/shop.module.css";

export default function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			dispatch(setCategories(await getCollectionAndDocuments("categories")));
		})();
	}, []);
	const categories = useSelector(selectCategories);
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
