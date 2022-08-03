import Layout from "../components/Layout.js";
import { CartProvider } from "../context/cartContext.js";
import { UserProvider } from "../context/userContext.js";
import { CategoriesProvider } from "../context/categoriesContext.js";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<CategoriesProvider>
				<CartProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CartProvider>
			</CategoriesProvider>
		</UserProvider>
	);
}
