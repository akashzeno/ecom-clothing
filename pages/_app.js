import Layout from "../components/Layout.js";
import { UserProvider } from "../context/context.js";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	);
}
