import { CART_ACTION_TYPES } from "./cart_action_types.js";

const CART_INITIAL_STATE = {
	cartDropdown: false,
	cartItems: [],
};

export function cartReducer(state = CART_INITIAL_STATE, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				cartDropdown: !state.cartDropdown,
			};
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: payload,
			};
		default:
			return state;
	}
}
