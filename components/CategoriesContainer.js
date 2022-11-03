import Link from "next/link.js";
import styles from "../styles/CategoriesContainer.module.css";
import Category from "./Category.js";

export default function CategoriesContainer({ categories }) {
	return (
		<div className={styles.categoriesContainer}>
			{categories.map((category) => (
				<Link key={category.id} href={`/shop/${category.title}`}>
					<Category category={category} />
				</Link>
			))}
		</div>
	);
}
