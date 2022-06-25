import Image from "next/image.js";
import styles from "../styles/Category.module.css";

export default function Category({ category: { title, imageUrl } }) {
	return (
		<div className={styles.category}>
			<Image
				className={styles.backgroundImage}
				layout="fill"
				src={imageUrl}
				objectFit="cover"
			></Image>
			<div className={styles.categoryBodyContainer}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
}
