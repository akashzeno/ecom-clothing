import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop_data/shopData.json";
export const ProductsContext = createContext({
	products: [],
	// setProducts: () => {},
});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState(PRODUCTS);
	// useEffect(() => {
	// 	setProducts(PRODUCTS);
	// }, []);
	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
}
