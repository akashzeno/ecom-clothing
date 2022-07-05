import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
	cartDropdown: false,
	toggleCartDropdown: () => null,
	cartItems: [],
	setCartItems: () => null,
	cartCount: 0,
});
export function CartProvider({ children }) {
	const [cartDropdown, toggleCartDropdown] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const addItemToCart = (product) => {
		const cart = [...cartItems];
		if (cart.length) {
			const existingItem = cart.findIndex((item) => item.id === product.id);

			if (existingItem === -1) {
				cart.push({ ...product, quantity: 1 });
			} else {
				cart[existingItem].quantity++;
			}
		} else {
			cart.push({ ...product, quantity: 1 });
		}
		setCartItems(cart);
	};
	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				cartDropdown,
				toggleCartDropdown,
				cartItems,
				setCartItems,
				addItemToCart,
				cartCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
