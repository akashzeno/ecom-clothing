import styles from "../styles/CategoriesContainer.module.css";
import Category from "./Category.js";

export default function CategoriesContainer({ categories }) {
	return (
		<div className={styles.categoriesContainer}>
			{categories.map((category) => (
				<Category key={category.id} category={category} />
			))}
		</div>
	);
}
