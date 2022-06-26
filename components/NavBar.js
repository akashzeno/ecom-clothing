import Image from "next/image.js";
import Link from "next/link.js";
import { useContext } from "react";
import { UserContext } from "../context/context.js";
import styles from "../styles/NavBar.module.css";
import { signOutUser } from "../utils/firebase.js";

export default function NavBar() {
	const { currentUser } = useContext(UserContext);

	return (
		<nav className={styles.navBar}>
			{/* <Image className={styles.logo}/> */}
			<Link href="/">
				<a className={styles.logoContainer}>
					<Image
						src="/crown.svg"
						className={styles.logo}
						width={50}
						height={39}
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
			</div>
		</nav>
	);
}
