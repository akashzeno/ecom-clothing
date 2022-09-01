import { CATEGORIES_ACTION_TYPES } from "./categories_action_types.js";

const CATEGORIES_INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};

export function categoriesReducer(
	state = CATEGORIES_INITIAL_STATE,
	action = {}
) {
	const { type, payload } = action;
	switch (type) {
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
			return { ...state, isLoading: true };
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCEEDED:
			return {
				...state,
				categories: payload,
				isLoading: false,
			};
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
			return {
				...state,
				error: { name: payload.name, message: payload.message },
				isLoading: false,
			};
		default:
			return state;
	}
}
