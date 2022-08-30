import Image from "next/image.js";
import { useDispatch , useSelector} from "react-redux";
import { addItemToCart } from "../store/cart/cart_actions.js";
import { selectCartItems } from "../store/cart/cart_selectors.js";
import styles from "../styles/ProductCard.module.css";
import Button from "./Button.js";

export default function ProductCard({ product }) {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const addProductToCart = () => dispatch(addItemToCart(product, cartItems));
	return (
		<div className={styles.productCardContainer}>
			<Image src={imageUrl} alt={name} width={450} height={500} />
			<div className={styles.footer}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>
				Add To Cart
			</Button>
		</div>
	);
}
