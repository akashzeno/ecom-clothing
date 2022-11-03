import Image from "next/image.js";
import Link from "next/link.js";
import styles from "../styles/NavBar.module.css";
import CartIcon from "./CartIcon.js";
import CartDropdown from "./CartDropdown.js";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../store/user/user_selectors.js";
import { selectCartDropdown } from "../store/cart/cart_selectors.js";
import { toggleCartDropdown } from "../store/cart/cart_actions.js";
import { useEffect } from "react";
import { checkUserSession, signOutStart } from "../store/user/user_actions.js";

export default function NavBar() {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const cartDropdown = useSelector(selectCartDropdown);
	const toggleCartDropdownHandler = () => dispatch(toggleCartDropdown());
	const signOutUser = () => dispatch(signOutStart());
	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	return (
		<nav className={styles.navBar}>
			<Link href="/" className={styles.logoContainer}>
				<Image
					src="/crown.svg"
					className={styles.logo}
					width="50"
					height="39"
					alt="logo"
				/>
			</Link>
			<div className={styles.navLinksContainer}>
				<Link href="/shop" className={styles.navLink}>
					SHOP
				</Link>
				{currentUser ? (
					<Link href="/auth" className={styles.navLink} onClick={signOutUser}>
						SIGN-OUT
					</Link>
				) : (
					<Link href="/auth" className={styles.navLink}>
						SIGN-IN
					</Link>
				)}
				<span onClick={toggleCartDropdownHandler}>
					<CartIcon />
				</span>
			</div>
			{cartDropdown && <CartDropdown />}
		</nav>
	);
}
