import { CART_ACTION_TYPES } from "./cart_action_types.js";

export const addItemToCart = (product, cartItems) => {
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
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems,
	};
};
export const removeItemFromCart = (product, cartItems) => ({
	type: CART_ACTION_TYPES.SET_CART_ITEMS,
	payload: cartItems.filter((item) => item.id !== product.id),
});
export const setCartItemQuantity = (product, value, cartItems) => {
	const newCartItems = [...cartItems];
	const existingItem = newCartItems.findIndex((item) => item.id === product.id);
	newCartItems[existingItem].quantity = value;
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: newCartItems,
	};
};
export const toggleCartDropdown = () => ({
	type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN,
});
