import { createSelector } from "reselect";

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartDropdown = (state) => state.cart.cartDropdown;
export const selectCartCount = createSelector(selectCartItems, (cartItems) =>
	cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector(selectCartItems, (cartItems) =>
	cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	)
);
