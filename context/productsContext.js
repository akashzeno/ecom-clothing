import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop_data/shopData.json";
export const ProductsContext = createContext({
	products: [],
	setProducts: () => null,
});

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState(PRODUCTS);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
}
