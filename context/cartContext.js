import { createContext, useReducer } from "react";

export const CartContext = createContext({
	cartDropdown: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
	toggleCartDropdown: () => null,
	addItemToCart: () => null,
	removeItemFromCart: () => null,
	setCartItemQuantity: () => null,
});

const INITIAL_STATE = {
	cartDropdown: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const CART_ACTION_TYPES = {
	TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
	SET_CART_ITEMS: "SET_CART_ITEM",
};

function cartReducer(state, action) {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				cartDropdown: payload,
			};
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		default:
			throw new Error(`Unhandled type ${type} in cartReducer`);
	}
}

export function CartProvider({ children }) {
	const [{ cartDropdown, cartItems, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const toggleCartDropdown = () => {
		dispatch({
			type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN,
			payload: !cartDropdown,
		});
	};

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartTotal: newCartTotal,
			},
		});
	};

	const addItemToCart = (product) => {
		const newCartItems = [...cartItems];
		if (newCartItems.length) {
			const existingItem = newCartItems.findIndex(
				(item) => item.id === product.id
			);

			if (existingItem === -1) {
				newCartItems.push({ ...product, quantity: 1 });
			} else {
				newCartItems[existingItem].quantity++;
			}
		} else {
			newCartItems.push({ ...product, quantity: 1 });
		}
		updateCartItemsReducer(newCartItems);
	};
	const removeItemFromCart = (product) => {
		updateCartItemsReducer(cartItems.filter((item) => item.id !== product.id));
	};
	const setCartItemQuantity = (product, value) => {
		const newCartItems = [...cartItems];
		const existingItem = newCartItems.findIndex(
			(item) => item.id === product.id
		);
		newCartItems[existingItem].quantity = value;
		updateCartItemsReducer(newCartItems);
	};

	return (
		<CartContext.Provider
			value={{
				cartDropdown,
				cartItems,
				cartCount,
				cartTotal,
				toggleCartDropdown,
				addItemToCart,
				removeItemFromCart,
				setCartItemQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
