import NavBar from "./Navbar.js";

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
		</>
	);
}
