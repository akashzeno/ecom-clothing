import Layout from "../components/Layout.js";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../utils/stripe.js";
export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Layout>
					<Elements stripe={stripePromise}>
						<Component {...pageProps} />
					</Elements>
				</Layout>
			</PersistGate>
		</Provider>
	);
}
