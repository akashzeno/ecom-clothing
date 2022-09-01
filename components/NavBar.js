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
			<Link href="/">
				<a className={styles.logoContainer}>
					<Image
						src="/crown.svg"
						className={styles.logo}
						width={50}
						height={39}
						alt="logo"
					/>
				</a>
			</Link>
			<div className={styles.navLinksContainer}>
				<Link href="/shop">
					<a className={styles.navLink}>SHOP</a>
				</Link>
				{currentUser ? (
					<Link href="/auth">
						<a className={styles.navLink} onClick={signOutUser}>
							SIGN-OUT
						</a>
					</Link>
				) : (
					<Link href="/auth">
						<a className={styles.navLink}>SIGN-IN</a>
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
