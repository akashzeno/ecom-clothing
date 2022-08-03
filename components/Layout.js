import NavBar from "./NavBar.js";

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
		</>
	);
}
