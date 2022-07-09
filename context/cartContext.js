import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
	cartDropdown: false,
	toggleCartDropdown: () => null,
	cartItems: [],
	addItemToCart: () => null,
	removeItemFromCart: () => null,
	cartCount: 0,
	cartTotal: 0,
});
export function CartProvider({ children }) {
	const [cartDropdown, toggleCartDropdown] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
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
	const removeItemFromCart = (product) => {
		// This is One way of removing items from cart
		// const cart = [...cartItems];
		// const existingItem = cart.findIndex((item) => item.id === product.id);
		// cart.splice(existingItem, 1);
		// setCartItems(cart);
		// Another way:
		setCartItems(cartItems.filter((item) => item.id !== product.id));
	};
	const changeCartItemQuantity = (product, value) => {
		const cart = [...cartItems];
		const existingItem = cart.findIndex((item) => item.id === product.id);
		cart[existingItem].quantity = value;
		setCartItems(cart);
	};
	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);

		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				cartDropdown,
				toggleCartDropdown,
				cartItems,
				addItemToCart,
				removeItemFromCart,
				changeCartItemQuantity,
				cartCount,
				cartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
