import { createContext, useState } from "react";

export const CartContext = createContext({
	cartDropdown: false,
	toggleCartDropdown: () => null,
});
export function CartProvider({ children }) {
	const [cartDropdown, toggleCartDropdown] = useState(false);
	return (
		<CartContext.Provider value={{ cartDropdown, toggleCartDropdown }}>
			{children}
		</CartContext.Provider>
	);
}
