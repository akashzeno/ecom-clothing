import Layout from "../components/Layout.js";
import { CartProvider } from "../context/cartContext.js";
import { UserProvider } from "../context/context.js";
import { ProductsProvider } from "../context/productsContext.js";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<ProductsProvider>
				<CartProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CartProvider>
			</ProductsProvider>
		</UserProvider>
	);
}
