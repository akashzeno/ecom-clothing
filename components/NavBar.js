import Image from "next/image.js";
import Link from "next/link.js";
import { useContext } from "react";
import { UserContext } from "../context/userContext.js";
import { CartContext } from "../context/cartContext.js";
import styles from "../styles/NavBar.module.css";
import { signOutUser } from "../utils/firebase.js";
import CartIcon from "./CartIcon.js";
import CartDropdown from "./CartDropdown.js";

export default function NavBar() {
	const { currentUser } = useContext(UserContext);
	const { cartDropdown, toggleCartDropdown } = useContext(CartContext);

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
				<span
					onClick={() => {
						toggleCartDropdown(!cartDropdown);
					}}
				>
					<CartIcon />
				</span>
			</div>
			{cartDropdown && <CartDropdown />}
		</nav>
	);
}
